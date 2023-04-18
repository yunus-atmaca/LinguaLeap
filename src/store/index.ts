import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { UserController, GameController } from './controllers'

export const store = configureStore({
  reducer: {
    userController: UserController.reducer,
    gameController: GameController.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  //getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})
