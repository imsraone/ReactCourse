import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import currencyReducer from './currencyReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    currency: currencyReducer,
    loading: commonReducer
});

export default rootReducer;