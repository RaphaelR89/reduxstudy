import { configureStore } from '@reduxjs/toolkit'

import useReducer from './reducers/useReducer'
import themeReducer from './reducers/themeReducer'

export const store = configureStore({
    reducer: {
        user: useReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>