import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux'
import { Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'

//this is where we mount our react app to the dom, so adding store here is making sense
//takes the reducer as input
const store = createStore(reducer)

//provider injects store into react component
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
