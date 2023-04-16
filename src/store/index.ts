import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { UserController } from './controllers'

export const store = configureStore({
  reducer: {
    userController: UserController.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  //getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})
