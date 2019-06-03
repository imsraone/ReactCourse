import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_CART } from "../actions/cartActions";


function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];
        case REMOVE_FROM_CART:
            return state.filter((p) => p.productId !== action.id);
        case CLEAR_CART:
            return [];
        case UPDATE_CART:
            return state.map(
                item => {
                    const c = action.cart.find(i => i.productId === item.productId);
                    if (c) {
                        return c;
                    }
                    return item;
                }
            )
        default:
            return state;
    }
}

export default cartReducer;