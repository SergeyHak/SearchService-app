import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { searchApi } from './api/serach-api'
import userReducer from "../src/slices/useValueSlice"
import userLoginReducer from "../src/slices/userLoginSlice"

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    userValue:userReducer,
    userLogin:userLoginReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
})
setupListeners(store.dispatch)