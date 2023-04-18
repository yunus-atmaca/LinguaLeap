import { RootState } from '@src/types/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectGame = (state: RootState) => {
  return state.gameController
}

export const fingerPos = createSelector(selectGame, c => c.fingerPos)
