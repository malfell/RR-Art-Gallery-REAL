import { configureStore } from '@reduxjs/toolkit'
// import data reducer
import dataReducer from './features/dataSlice'
// import middlware
import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    // add middleware to store
    middleware: [ logger ]
})
