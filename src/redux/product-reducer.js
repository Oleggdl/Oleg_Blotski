import {client} from "../index"
import {gql} from "@apollo/client"

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
const SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT'

let initialState = {
    products: [],
    currentProduct: {},
    productAmount: {}
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.products
            }
        }

        case SET_CURRENT_PRODUCT: {
            return {
                ...state,
                currentProduct: action.currentProduct
            }
        }

        case SET_PRODUCT_AMOUNT: {
            return {
                ...state,
                productAmount: {...state.productAmount, [action.id]: action.value}
            }
        }

        default:
            return state
    }
}

export const getProductsActionCreator = products => ({type: GET_PRODUCTS, products})
export const setCurrentProductActionCreator = currentProduct => ({type: SET_CURRENT_PRODUCT, currentProduct})
export const setProductAmountActionCreator = (id, value) => ({type: SET_PRODUCT_AMOUNT, id, value})

export const getProducts = (category) => {

    return async dispatch => {
        client.query({
            query: gql`
                    query category {
                        category(input: {
                          title: "${category}"
                        }){
                           name
                           products {
                            id
                             name
                             gallery
                             inStock
                             prices {
                                 currency {
                                     label
                                 }
                                 amount
                             }
                             brand
                             description
                             attributes{
                                 id
                                 name
                                 type
                                 items{
                                    displayValue
                                    value
                                    id
                                 }
                             }
                           }
                        }
                    }
                    `
        })
            .then(result => dispatch(getProductsActionCreator(result.data.category)))
    }
}

export const setCurrentProduct = (currentProduct) => {

    return async dispatch => {
        dispatch(setCurrentProductActionCreator(currentProduct))
    }
}

export const setProductAmount = (id, value) => {

    return async dispatch => {
        dispatch(setProductAmountActionCreator(id, value))
    }
}


export default productReducer
