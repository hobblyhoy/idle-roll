import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export type GameSliceState = {
  currentMoney: number
}

const initialState: GameSliceState = {
  currentMoney: 0,
}

export const gameSlice = createAppSlice({
  name: "game",
  initialState,
  reducers: create => ({
    addMoney: create.reducer((state, action: PayloadAction<number>) => {
      state.currentMoney += action.payload
    }),
    subtractMoney: create.reducer((state, action: PayloadAction<number>) => {
      state.currentMoney -= action.payload
    }),
  }),
  selectors: {
    selectCurrentMoney: game => game.currentMoney,
  },
})

export const { addMoney, subtractMoney } = gameSlice.actions

export const { selectCurrentMoney } = gameSlice.selectors
