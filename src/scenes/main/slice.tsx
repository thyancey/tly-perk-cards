import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CardDef, CardModifier, CardStatus, GameStats } from '../../types';
import { ALL_CARDS_MAP, DECK_DATA } from '../../app/data/data';
import { FaceRounded, SatelliteSharp } from '@material-ui/icons';

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

      state.deckStatus = curDeckStatus.map((dS: CardStatus, idx: number) => {
        if(dealtIndicies.includes(idx)){
          return {
            ...dS,
            dealt: true,
            active: true
          } as CardStatus;
        }
        return dS;
      });

      state.hand = dealtIndicies;
    },
    augmentStats: (state, action: PayloadAction<CardModifier>) => {
      const statType = action.payload.type;
      if(state.gameStats[statType]){
        state.gameStats[statType].value = state.gameStats[statType].value + action.payload.value;
      }else{
        state.gameStats[statType] = {
          type: statType,
          value: action.payload.value
        };
      }

      state.deckStatus = state.deckStatus.map((dS: CardStatus, idx: number) => {
        if(state.hand.includes(idx)){
          return {
            ...dS,
            active: false
          } as CardStatus;
        }
        return dS;
      });


      state.hand = [];
    }
  }
});

export const { initCards, dealCards, augmentStats } = deckSlice.actions;

export const getDeckStatus = (state: RootState) => state.data.deckStatus;
export const getHand = (state: RootState) => state.data.hand;
export const getGameStats = (state: RootState) => state.data.gameStats;

export const getCardData = (cardStatus: CardStatus) => {
  return ALL_CARDS_MAP[cardStatus.id];
};

export const selectGameStats = createSelector(
  [getGameStats],
  (gameStats): CardModifier[] => {
    console.log('hello', gameStats);

    // @ts-ignore
    return Object.keys(gameStats).map(key => gameStats[key]) as CardModifier[];
  }
);

export const selectDealtHand = createSelector(
  [getHand, getDeckStatus],
  (hand, deckStatus): CardDef[] => {

    return hand.filter(h => h !== -1).map(h => {
      return getCardData(deckStatus[h]);
    });
  }
);

export const selectDrawPile = createSelector(
  [getDeckStatus],
  (deckStatus): CardDef[] => {
    return deckStatus.filter(d => !d.dealt).map(cS => {
      return getCardData(cS);
    });
  }
);

export const selectDiscardPile = createSelector(
  [getDeckStatus],
  (deckStatus): CardDef[] => {
    return deckStatus.filter(d => (d.dealt && !d.active)).map(cS => {
      return getCardData(cS);
    });
  }
);

export const drawCardIndicies = (deckStatus: CardStatus[]) => {
  const dealtIndicies: number[] = [];
  let availableDeck = deckStatus.filter(cS => !cS.dealt);
  for(let i = 0; i < 3; i++){
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
    if(ALL_CARDS_MAP[cardInfo.id]){
      for(let j = 0; j < cardInfo.count; j++){
        allCards.push({
          id: cardInfo.id,
          deckIdx: allCards.length,
          dealt: false,
          active: false
        } as CardStatus);
      }
    }
  }

  return allCards;
};

export default deckSlice.reducer;