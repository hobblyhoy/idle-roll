import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import _ from 'lodash';
import { IPlayingCard } from './types';
import { PrebakeGrowth, PrebakeSpeed } from '../playing-cards/PrebakedCards';

export type GameSliceState = {
   tickInterval: number; // How frequently the autodraw will happen
   currentMoney: number; // 123 = $1.23
   currentBase: number; // 123 = $1.23
   currentSpeed: number; // float multiplier
   currentMultiplier: number; // float multiplier
   cardDeck: IPlayingCard[];
   //index of the card thats currently active. 0 is the top. -1 for empty deck.
   activeCardIndex: number;
   hasCards: boolean;
};

const initialState: GameSliceState = {
   tickInterval: 2000,
   currentMoney: 0,
   currentBase: 34,
   currentSpeed: 1,
   currentMultiplier: 1,
   //cardDeck: [],
   cardDeck: [PrebakeGrowth, PrebakeSpeed],
   activeCardIndex: -1,
   hasCards: true, // reset to false after testing
};

export const gameSlice = createAppSlice({
   name: 'game',
   initialState,
   reducers: create => ({
      addMoney: create.reducer((state, action: PayloadAction<number>) => {
         state.currentMoney = state.currentMoney + action.payload;
      }),
      addToDeck: create.reducer(
         (state, action: PayloadAction<IPlayingCard>) => {
            state.cardDeck = [...state.cardDeck, action.payload];
         }
      ),
   }),
   selectors: {
      selectTickInterval: game => game.tickInterval,
      selectCurrentMoney: game => game.currentMoney,
      selectCurrentBase: game => game.currentBase,
      selectCurrentSpeed: game => game.currentSpeed,
      selectCurrentMultiplier: game => game.currentMultiplier,
      selectCurrentCard: game =>
         game.activeCardIndex >= 0 ? game.cardDeck[game.activeCardIndex] : null,
      selectHasCards: game => game.cardDeck.length > 0,
   },
});

export const { addMoney } = gameSlice.actions;

export const {
   selectTickInterval,
   selectCurrentMoney,
   selectCurrentBase,
   selectCurrentSpeed,
   selectCurrentMultiplier,
   selectCurrentCard,
   selectHasCards,
} = gameSlice.selectors;
