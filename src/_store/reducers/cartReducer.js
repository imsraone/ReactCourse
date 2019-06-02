import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartActions";


function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];
        case REMOVE_FROM_CART:
            return state.filter((p) => p.productId != action.id);
        case CLEAR_CART:
            return [];
        default:
            return state;
    }
}

export default cartReducer;