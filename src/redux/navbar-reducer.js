import {client} from "../index"
import {gql} from "@apollo/client"

const IS_CURRENCY_MENU = 'IS_CURRENCY_MENU'
const IS_CART_OVERLAY = 'IS_CART_OVERLAY'
const GET_CURRENCIES = 'GET_CURRENCIES'
const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY'

let initialState = {
    isCartOverlay: false,
    isCurrencyMenu: false,
    currencies: [],
    currentCurrency: {}
}

const navbarReducer = (state = initialState, action) => {

    switch (action.type) {

        case IS_CART_OVERLAY: {
            return {
                ...state,
                isCartOverlay: action.isCartOverlay
            }
        }

        case IS_CURRENCY_MENU: {
            return {
                ...state,
                isCurrencyMenu: action.isCurrencyMenu
            }
        }

        case GET_CURRENCIES: {
            return {
                ...state,
                currencies: action.currencies
            }
        }

        case SET_CURRENT_CURRENCY: {
            return {
                ...state,
                currentCurrency: action.currentCurrency
            }
        }

        default:
            return state
    }
}

export const setIsCurrencyMenuActionCreator = isCurrencyMenu => ({type: IS_CURRENCY_MENU, isCurrencyMenu})
export const setIsCartOverlayActionCreator = isCartOverlay => ({type: IS_CART_OVERLAY, isCartOverlay})
export const getCurrenciesActionCreator = currencies => ({type: GET_CURRENCIES, currencies})
export const setCurrentCurrencyActionCreator = currentCurrency => ({type: SET_CURRENT_CURRENCY, currentCurrency})

export const setIsCartOverlay = (value) => {

    return async dispatch => {
        dispatch(setIsCartOverlayActionCreator(value))
    }
}

export const setIsCurrencyMenu = (value) => {

    return async dispatch => {
        dispatch(setIsCurrencyMenuActionCreator(value))
    }
}

export const getCurrencies = () => {

    return async dispatch => {
        client.query({
            query: gql`
                query currencies {
                    currencies{
                        label
                        symbol
                    }   
                }`
        })
            .then(result => {
                dispatch(getCurrenciesActionCreator(result.data.currencies))
                dispatch(setCurrentCurrencyActionCreator(JSON.parse(window.localStorage.getItem('currentCurrency'))
                    ? JSON.parse(window.localStorage.getItem('currentCurrency')) : result.data.currencies[0]))
            })

    }
}

export const setCurrentCurrency = currentCurrency => {

    return async dispatch => {
        dispatch(setCurrentCurrencyActionCreator(currentCurrency))
    }
}

export default navbarReducer
