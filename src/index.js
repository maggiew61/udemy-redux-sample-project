import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux'
import { Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

//takes js objects as inputs and merge all reducers into one store/state/reducer
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

//this is where we mount our react app to the dom, so adding store here is making sense
//takes the reducer as input
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

//provider injects store into react component
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
