// import createSlice
import { createSlice } from '@reduxjs/toolkit'

// declare initialState object with properties of:
    // objectId (to drive API results) and
    // apiData (to store actual data from the API)
const initialState = {
    objectId: 10245,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // sets API data to state
        setData: (state, action) => {
            return {...state, apiData : action.payload}
        },
        // resets state back to initial values
        clearData: () => {
            return initialState
        },
        // enter custom ID
        inputId: (state, action) => {
            return { ...state, objectId: action.payload }
        },
        // increments ID by one
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        // decrements ID by one
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        }
    }
})

export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer