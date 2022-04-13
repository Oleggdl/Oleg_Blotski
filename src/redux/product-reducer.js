import {client} from "../index"
import {gql} from "@apollo/client"

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

let initialState = {
    products: [],
    currentProduct: {},
    currentCategory: null
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

        case SET_CURRENT_CATEGORY: {
            return {
                ...state,
                currentCategory: action.currentCategory
            }
        }

        default:
            return state
    }
}

export const getProductsActionCreator = products => ({type: GET_PRODUCTS, products})
export const setCurrentProductActionCreator = currentProduct => ({type: SET_CURRENT_PRODUCT, currentProduct})
export const setCurrentCategoryActionCreator = currentCategory => ({type: SET_CURRENT_CATEGORY, currentCategory})

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
        dispatch(setCurrentCategoryActionCreator(category))
    }
}

export const getAllProducts = () => {

    return async dispatch => {
        client.query({
            query: gql`
                    query category {
                        category {
                           name
                           products{
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
            .then(result => {
                dispatch(getProductsActionCreator(result.data.category))
                dispatch(setCurrentCategoryActionCreator(result.data.category.name))
            })

    }
}

export const setCurrentProduct = (currentProduct) => {

    return async dispatch => {
        dispatch(setCurrentProductActionCreator(currentProduct))
    }
}


export default productReducer
