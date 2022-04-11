const IS_CART_OVERLAY = 'IS_CART_OVERLAY'

let initialState = {
    isCartOverlay: false
}

const navbarReducer = (state = initialState, action) => {

    switch (action.type) {

        case IS_CART_OVERLAY: {
            return {
                ...state,
                isCartOverlay: action.isCartOverlay
            }
        }

        default:
            return state
    }
}

export const setIsCartOverlayActionCreator = isCartOverlay => ({type: IS_CART_OVERLAY, isCartOverlay})

export const setIsCartOverlay = (value) => {

    return async dispatch => {
        dispatch(setIsCartOverlayActionCreator(value))
    }
}

export default navbarReducer
