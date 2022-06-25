import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CardDef, CardStatus } from '../../types';
import { ALL_CARDS_MAP, DECK_DATA } from '../../app/data/data';
import { FaceRounded } from '@material-ui/icons';

export interface DeckState {
  deckStatus: CardStatus[];
  hand: number[];
}

const initialState: DeckState = {
  deckStatus: [],
  hand: []
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
    }
  }
});

export const { initCards, dealCards } = deckSlice.actions;

export const getDeckStatus = (state: RootState) => state.data.deckStatus;
export const getHand = (state: RootState) => state.data.hand;

export const getCardData = (cardStatus: CardStatus) => {
  return ALL_CARDS_MAP[cardStatus.id];
};

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