const redux = require('redux')
const createStore = redux.createStore
//pass the reducer to the store as an argument


const initialState = {
    counter: 0 
}

//!reducer w/ business logic
const rootReducer = (state = initialState,action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state, 
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter +action.value
        }
    }
    return state
}

const store = createStore(rootReducer)
console.log(store.getState())


store.subscribe(()=>{
    console.log('subsription',store.getState())
})

//!dispatch with value
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})

console.log('after',store.getState())



