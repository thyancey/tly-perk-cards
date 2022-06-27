import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CardBooleanStat, CardDef, CardDefMap, CardModifier, CardStatus, CardValueStat, GameStats, RawCardDef, RawCardModifier } from '../../types';
import { ALL_CARDS_MAP, DECK_DATA } from '../../app/data/data';

const CARDS_PER_DRAW = 4;

export interface DeckState {
  deckStatus: CardStatus[];
  hand: number[];
  gameStats: GameStats;
}

const initialState: DeckState = {
  deckStatus: [],
  hand: [],
  gameStats: {}
};

const parseRawModifiers = (rawModifiers: RawCardModifier[]) => {
  return rawModifiers.map((m: RawCardModifier) => ({
    type: m.type,
    effect:{
      stat: m.stat,
      value: m.value
    }
  } as CardModifier))
}


const PARSED_CARDS_MAP = (() => {
  const retMap = {} as CardDefMap;
  Object.keys(ALL_CARDS_MAP).forEach(cardKey => {
    const card = ALL_CARDS_MAP[cardKey];
    retMap[cardKey] = {
      ...card,
      modifiers: parseRawModifiers(card.modifiers)
    }
  });

  return retMap;
})();


export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    initCards: (state) => {
      state.deckStatus = createDeck();
    },
    dealCards: (state) => {
      const curDeckStatus = state.deckStatus.map((dS: CardStatus, idx: number) => {
        if(dS.active){
          return {
            ...dS,
            active: false
          } as CardStatus;
        }
        return dS;
      });

      const dealtIndicies = drawCardIndicies(curDeckStatus);

      const now = new Date().getTime();
      state.deckStatus = curDeckStatus.map((dS: CardStatus, idx: number) => {
        if(dealtIndicies.includes(idx)){
          return {
            ...dS,
            dealt: true,
            dealtAt: now + idx,
            active: true
          } as CardStatus;
        }
        return dS;
      });

      state.hand = dealtIndicies;
    },
    augmentStats: (state, action: PayloadAction<CardModifier>) => {
      if(action.payload.type === 'boolean'){
        const effect = action.payload.effect as CardBooleanStat;
        state.gameStats[effect.stat] = {
          type: 'boolean',
          stat: effect.stat,
          value: effect.value
        } as CardBooleanStat;
      }else if(action.payload.type === 'add'){
        const effect = action.payload.effect as CardValueStat;
        state.gameStats[effect.stat] = {
          type: 'value',
          stat: effect.stat,
          value: ((state.gameStats[effect.stat] as CardValueStat)?.value || 0) + effect.value
        } as CardValueStat;
      }
    },
    chooseCard: (state, action: PayloadAction<any>) => {
      const chosenIdx = action.payload.handIdx;
      const laneId = action.payload.laneId;
      // discard those cards now.
      console.log('put away cards', state.hand.map(h => h))
      state.deckStatus = state.deckStatus.map((dS: CardStatus, idx: number) => {
        if(state.hand.includes(idx)){
          console.log("put it away ", idx, chosenIdx)
          return {
            ...dS,
            active: false,
            lane: idx === chosenIdx ? laneId : dS.lane
          } as CardStatus;
        }
        return dS;
      });


      state.hand = [];
    }
  }
});

export const { initCards, dealCards, augmentStats, chooseCard } = deckSlice.actions;

export const getDeckStatus = (state: RootState) => state.data.deckStatus;
export const getHand = (state: RootState) => state.data.hand;
export const getGameStats = (state: RootState) => state.data.gameStats;

export const getCardData = (cardStatus: CardStatus, deckIdx: number) => {
  return { 
    ...PARSED_CARDS_MAP[cardStatus.id],
    deckIdx: deckIdx
  };
};

export const selectGameStats = createSelector(
  [getGameStats],
  (gameStats): (CardBooleanStat| CardValueStat)[] => {
    return Object.keys(gameStats).map(key => gameStats[key]) as (CardBooleanStat| CardValueStat)[];
  }
);

export const selectDealtHand = createSelector(
  [getHand, getDeckStatus],
  (hand, deckStatus): CardDef[] => {

    return hand.filter(h => h !== -1).map(h => {
      return getCardData(deckStatus[h], h);
    });
  }
);

export const selectDrawPile = createSelector(
  [getDeckStatus],
  (deckStatus): CardDef[] => {
    return deckStatus.filter(d => !d.dealt).map((cS, idx) => {
      return getCardData(cS, idx);
    });
  }
);

export const selectDiscardPile = createSelector(
  [getDeckStatus],
  (deckStatus): CardDef[] => {
    return deckStatus
      .filter(d => (d.dealt && !d.active && d.lane === 0))
      .sort((a, b) => (a.dealtAt > b.dealtAt) ? 1 : -1)
      .map((cS, idx) => getCardData(cS, idx));
  }
);

export const selectLaneCards = createSelector(
  [getDeckStatus],
  (deckStatus): CardDef[][] => {
    let laneCards = [];

    for(let l = 1; l <= 3; l++){
      laneCards[l] = deckStatus
        .filter(d => (d.lane === l))
        .sort((a, b) => (a.dealtAt > b.dealtAt) ? 1 : -1)
        .map((cS, idx) => getCardData(cS, idx));
    }
    return laneCards;
  }
);

export const drawCardIndicies = (deckStatus: CardStatus[]) => {
  const dealtIndicies: number[] = [];
  let availableDeck = deckStatus.filter(cS => !cS.dealt);
  for(let i = 0; i < CARDS_PER_DRAW; i++){
    if(availableDeck.length === 0) {
      // deck is now empty.
      break;
    }
    const drawnIdx = Math.floor(availableDeck.length * Math.random());
    const thingy = availableDeck[drawnIdx];
    dealtIndicies.push(thingy.deckIdx);
    availableDeck.splice(drawnIdx, 1);
  }

  return dealtIndicies;
}

export const createDeck = () => {
  let allCards = [];
  for(let i = 0; i < DECK_DATA.length; i++){
    const cardInfo = DECK_DATA[i];
    if(PARSED_CARDS_MAP[cardInfo.id]){
      for(let j = 0; j < cardInfo.count; j++){
        allCards.push({
          id: cardInfo.id,
          deckIdx: allCards.length,
          dealt: false,
          dealtAt: 0,
          active: false,
          lane: 0
        } as CardStatus);
      }
    }
  }

  return allCards;
};

export default deckSlice.reducer;