import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import boredReducer from './reducers/index';
 
const middleware = [thunk];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    boredReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );



export default store;