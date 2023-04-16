import { RootState } from '@src/types/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectUser = (state: RootState) => {
  return state.userController
}

//s = select
export const sProficiency = createSelector(selectUser, c => c.proficiency)
export const sNLanguage = createSelector(selectUser, c => c.nLanguage)
export const sSLanguage = createSelector(selectUser, c => c.sLanguage)
