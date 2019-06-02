import { UPDATE_CURRENCY } from "../actions/currencyActions";

// reducer : function(state,action) => returns updated store

function currencyReducer(state = "INR", action) {
    switch (action.type) {
        case UPDATE_CURRENCY:
            return action.code;
        default:
            return state;
    }
}

export default currencyReducer;