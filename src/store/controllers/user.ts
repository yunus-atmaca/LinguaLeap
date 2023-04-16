import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  SelectedLanguage,
  NativeLanguage,
  ProficiencyLevel,
} from '@src/types/app'

const name = 'user'

interface State {
  proficiency: ProficiencyLevel
  nLanguage: NativeLanguage
  sLanguage: SelectedLanguage
}

const initialState: State = {
  proficiency: 'Undefined',
  nLanguage: 'English',
  sLanguage: 'English',
}

const {
  actions: { setState },
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    setState: (state, action: PayloadAction<Partial<State>>) => {
      return { ...state, ...action.payload }
    },
  },
})

export { reducer, setState }
