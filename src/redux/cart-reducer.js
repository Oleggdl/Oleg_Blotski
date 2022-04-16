const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT'
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'

let initialState = {
    cart: [],
    totalAmount: 0
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state,
                cart: [...state.cart,
                    {...action.product, selectedAttributes: action.attributes, isInCart: action.isInCart}]
            }
        }

        case DELETE_PRODUCT_FROM_CART: {
            return {
                ...state,
                cart: action.cart
            }
        }

        case SET_TOTAL_AMOUNT: {
            return {
                ...state, totalAmount: action.totalAmount
            }
        }

        default:
            return state
    }
}

export const addProductToCartActionCreator = (product, attributes, isInCart) =>
    ({type: ADD_PRODUCT_TO_CART, product, attributes, isInCart})
export const setTotalAmountActionCreator = totalAmount => ({type: SET_TOTAL_AMOUNT, totalAmount})
export const deleteProductFromCartActionCreator = cart => ({type: DELETE_PRODUCT_FROM_CART, cart})

export const addProductToCart = (product, attributes, isInCart) => {

    return async dispatch => {
        dispatch(addProductToCartActionCreator(product, attributes, isInCart))
    }
}

export const setTotalAmount = (totalAmount) => {

    return async dispatch => {
        dispatch(setTotalAmountActionCreator(totalAmount))
    }
}

export const deleteProductFromCart = (cart) => {

    return async dispatch => {
        dispatch(deleteProductFromCartActionCreator(cart))
    }
}

export default cartReducer
