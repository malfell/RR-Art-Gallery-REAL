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

// export dataSlice actions
export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions

// data thunk
// 1 thunk action creator
export const fetchData = () => {
    // 2 thunk function--must be async
        // dispatch and getState as parameters
    const dataThunk = async (dispatch, getState) => {
        // 3 side effects
        // need state too
        let state = getState()
        // get response from URL--must use AWAIT
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        // then await response and convert it to json
        const resData = await response.json()
        // console log to make sure it's successful
        console.log(resData)
        // 4 dispatch to pertinent render
        dispatch(setData(resData))

    }
    // then return the dataThunk
    return dataThunk
}

// export dataSlice as reducer
export default dataSlice.reducer