import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CardDef } from '../../types';
import { DECK_DATA } from '../../app/data/data';

const NUM_PER_HAND = 3;

export interface DeckState {
  deck: CardDef[];
  somethinElse: string;
}

const initialState: DeckState = {
  deck: [],
  somethinElse: '',
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initCards: (state) => {
      state.deck = DECK_DATA.map((cardDef: CardDef) => cardDef);
      console.log('state gonna be ', state.deck)
    }
  }
});

export const { initCards } = deckSlice.actions;

export const getDeck = (state: RootState) => state.data.deck;

export const selectHand = createSelector(
  [getDeck],
  (deck): CardDef[] => {
    let hand = [] as CardDef[];
    if(deck.length === 0){
      return hand;
    }
    for(let i = 0; i < NUM_PER_HAND; i++){
      const randIdx = Math.floor(deck.length * Math.random());

      hand.push(deck[randIdx])
    }

    return hand;
  }
);

export default deckSlice.reducer;