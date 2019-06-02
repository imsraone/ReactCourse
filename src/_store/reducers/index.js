import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import currencyReducer from './currencyReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    currency: currencyReducer
});

export default rootReducer;