import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import deckReducer from '../scenes/main/slice';

export const store = configureStore({
  reducer: {
    data: deckReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
