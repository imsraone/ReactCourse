//actions :functions ->returns dispatcher object

// dispatcher 
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_CART = 'UPDATE_CART';

const addToCart = (item) => ({
    type: ADD_TO_CART,
    item: { ...item, qty: 1 }
})

const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

const clearCart = ({
    type: CLEAR_CART
})

const updateCart = (cart) => ({
    type: UPDATE_CART,
    cart
})

export { clearCart, addToCart, removeFromCart, updateCart, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_CART }