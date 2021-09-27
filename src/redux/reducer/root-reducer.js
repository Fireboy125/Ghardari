import { combineReducers } from "redux";

import postReducer from "./reducer";
import CartReducer from './CartReducer';
import ProductReducer from './ProductsReducer'

const rootReducer =combineReducers({
    data : postReducer,
    cart: CartReducer, ProductReducer
});

export default rootReducer;
