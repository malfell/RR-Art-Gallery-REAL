// curried function!
// logger to display state value before and after action is performed on the page
// helpful for debugging UI errors
export const logger = store => next => action => {
    // since Thunk is returning a function, it needs an exception in the Middleware
    // in event action is a function, we must treat it the way Redux would call a Thunk
        // -- by passing it the store dispatch and getState methods!
    if (typeof action === 'function') {
        action(store.dispatch, store.getState)
    } else {
        console.log('dispatch', store.getState())
        next(action)
        console.log('after dispatch', store.getState())

    }


}