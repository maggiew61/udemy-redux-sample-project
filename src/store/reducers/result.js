import * as actionTypes from '../actions'

const initialState = {
    results: []
}
const reducer = (state = initialState,action)=>{
    //we can write the old way (multiple ifs) or we can use a switch case to
    //add the readability 
    switch ( action.type ){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value:action.result})
            }    
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state
}
export default reducer; 