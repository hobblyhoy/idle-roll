import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import _ from 'lodash';

export type GameSliceState = {
   tickInterval: number; // How frequently the autodraw will happen
   currentMoney: number; // 123 = $1.23
   currentBase: number; // 123 = $1.23
   currentSpeed: number; // float multiplier
   currentMultiplier: number; // float multiplier
};

const initialState: GameSliceState = {
   tickInterval: 2000,
   currentMoney: 123,
   currentBase: 34,
   currentSpeed: 1,
   currentMultiplier: 1,
};

export const gameSlice = createAppSlice({
   name: 'game',
   initialState,
   reducers: create => ({
      addMoney: create.reducer((state, action: PayloadAction<number>) => {
         state.currentMoney = state.currentMoney + action.payload;
      }),
   }),
   selectors: {
      selectTickInterval: game => game.tickInterval,
      selectCurrentMoney: game => game.currentMoney,
      selectCurrentBase: game => game.currentBase,
      selectCurrentSpeed: game => game.currentSpeed,
      selectCurrentMultiplier: game => game.currentMultiplier,
   },
});

export const { addMoney } = gameSlice.actions;

export const {
   selectTickInterval,
   selectCurrentMoney,
   selectCurrentBase,
   selectCurrentSpeed,
   selectCurrentMultiplier,
} = gameSlice.selectors;
