const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

let initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, {...action.product, selectedAttributes: action.attributes}]
            }
        }

        default:
            return state
    }
}


export const addProductToCartActionCreator = (product, attributes) => ({type: ADD_PRODUCT_TO_CART, product, attributes})

export const addProductToCart = (product, attributes) => {

    return async dispatch => {
        dispatch(addProductToCartActionCreator(product, attributes))
    }
}


export default cartReducer
