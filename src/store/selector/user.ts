import { RootState } from '@src/types/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectUser = (state: RootState) => {
  return state.userController
}

export const proficiency = createSelector(selectUser, c => c.proficiency)
export const nLanguage = createSelector(selectUser, c => c.nLanguage)
export const sLanguage = createSelector(selectUser, c => c.sLanguage)
