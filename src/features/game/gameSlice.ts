import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../app/createAppSlice';
import { IDice } from './types';
import _ from 'lodash';
import { rollDice } from '../../utils/UtilFuncs';

export type GameSliceState = {
   tickInterval: number;
   currentMoney: number;
   diceArr: IDice[];
   rollEveryMs: number;
   manualClicksToProcess: number[];
};

const initialState: GameSliceState = {
   tickInterval: 100,
   currentMoney: 0,
   diceArr: [],
   rollEveryMs: 0,
   manualClicksToProcess: [],
};

const winningValues = [1, 2, 3, 4, 5, 6];
const winningAmounts = [1, 10, 100, 1000, 10_000, 100_000];

const rollAndUpdateDie = (die: IDice) => {
   const result = rollDice(6);
   die.currentRoll = result;
   die.history = [...die.history, result].slice(-25);
   die.currentRunIndex++;
   if (result !== winningValues[die.currentRunIndex]) {
      die.currentRunIndex = -1;
   }

   die.maxRunIndex = _.max([die.maxRunIndex, die.currentRunIndex]);
   die.isWinState = die.maxRunIndex === winningValues.length - 1;

   return die;
};

export const gameSlice = createAppSlice({
   name: 'game',
   initialState,
   reducers: create => ({
      processGameTick: create.reducer(state => {
         const currentTime = Date.now();
         // console.log('tick - ' + currentTime);

         state.diceArr
            .filter(x => !x.isWinState)
            .forEach(die => {
               // Determine how many auto and manual rolls to execute since our last processing
               const liveTime = currentTime - die.registeredAt;
               const totalRollsExpected =
                  state.rollEveryMs > 0
                     ? Math.floor(liveTime / state.rollEveryMs)
                     : 0;
               const newAutoRollsToPerform =
                  totalRollsExpected - die.totalAutoRollCount;
               const newManualRollsToPerform =
                  state.manualClicksToProcess.filter(x => x === die.id).length;
               const totalRollsToPerform =
                  newAutoRollsToPerform + newManualRollsToPerform;

               // Perform the processing
               _.times(totalRollsToPerform, () => {
                  if (die.isWinState) return;

                  rollAndUpdateDie(die);
                  if (die.currentRunIndex >= 0) {
                     state.currentMoney += winningAmounts[die.currentRunIndex];
                     if (die.currentRunIndex >= 3) {
                        console.log(
                           'Big win!: ' + winningAmounts[die.currentRunIndex]
                        );
                        console.log(die.history);
                     }
                  }
               });

               // Post processing
               die.totalAutoRollCount += newAutoRollsToPerform;
               state.manualClicksToProcess = state.manualClicksToProcess.filter(
                  x => x !== die.id
               );
            });

         // Trigger the update
         state.diceArr = [...state.diceArr];
      }),
      pushToManualClicks: create.reducer(
         (state, action: PayloadAction<number>) => {
            state.manualClicksToProcess = [
               ...state.manualClicksToProcess,
               action.payload,
            ];
         }
      ),
      registerDice: create.reducer((state, action: PayloadAction<number>) => {
         if (state.currentMoney < action.payload) return;

         state.currentMoney -= action.payload;

         const maxDice = _.maxBy(state.diceArr, x => x.id);
         const maxDiceId = maxDice ? maxDice.id : 0;
         state.diceArr = [
            ...state.diceArr,
            {
               id: maxDiceId + 1,
               history: [],
               currentRoll: 0,
               registeredAt: Date.now(),
               totalAutoRollCount: 0,
               currentRunIndex: -1,
               maxRunIndex: -1,
               isWinState: false,
            },
         ];
      }),
      purchaseAutoClick: create.reducer(
         (
            state,
            action: PayloadAction<{ cost: number; rollEveryMs: number }>
         ) => {
            if (state.currentMoney < action.payload.cost) return;

            state.currentMoney -= action.payload.cost;
            state.rollEveryMs = action.payload.rollEveryMs;
         }
      ),
   }),
   selectors: {
      selectCurrentMoney: game => game.currentMoney,
      selectDiceArr: game => game.diceArr,
      selectTickInterval: game => game.tickInterval,
      selectRollEveryMs: game => game.rollEveryMs,
   },
});

export const {
   processGameTick,
   pushToManualClicks,
   registerDice,
   purchaseAutoClick,
} = gameSlice.actions;

export const {
   selectCurrentMoney,
   selectDiceArr,
   selectTickInterval,
   selectRollEveryMs,
} = gameSlice.selectors;
