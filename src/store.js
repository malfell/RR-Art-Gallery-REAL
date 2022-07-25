import { configureStore } from '@reduxjs/toolkit'
// import data reducer
import dataReducer from './features/dataSlice'

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})
