const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

let initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.cart]
            }
        }

        default:
            return state
    }
}


export const addProductToCartActionCreator = cart => ({type: ADD_PRODUCT_TO_CART, cart})

export const addProductToCart = (product) => {

    return async dispatch => {
        dispatch(addProductToCartActionCreator(product))
    }
}


export default cartReducer
