import * as actionTypes from '../actions'

const initialState = {
    counter: 0
}
const reducer = (state = initialState,action)=>{
    //we can write the old way (multiple ifs) or we can use a switch case to
    //add the readability 
    switch ( action.type ){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter -1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter + action.val
            }
    }
    return state
}
export default reducer; 