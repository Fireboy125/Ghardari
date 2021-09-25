import {createStore,applyMiddleware,compose} from  "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from './reducer/root-reducer';

const middleWares =[thunk];
const  composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if(process.env.NODE_ENV === "development"){
    middleWares.push(logger);
} 

// const store = createStore(rootReducer,applyMiddleware(reduxWindow,...middleWares) );


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;   
