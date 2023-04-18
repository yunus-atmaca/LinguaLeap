import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const name = 'game'

type FPosition = {
  x: number
  y: number
  pan: 'start' | 'update' | 'end'
}

interface State {
  fingerPos: FPosition[]
}

const initialState: State = {
  fingerPos: [],
}

const {
  actions: { addFPositions },
  reducer,
} = createSlice({
  name,
  initialState: initialState,
  reducers: {
    addFPositions: (state, action: PayloadAction<FPosition>) => {
      //const temp  = [...state.fingerPos]
      const pan = action.payload.pan
      if (pan === 'end') {
      } else if (pan === 'start') {
      } else {
        //update
      }
      return { ...state, fingerPos: state.fingerPos.concat(action.payload) }
    },
  },
})

export { reducer, addFPositions }
