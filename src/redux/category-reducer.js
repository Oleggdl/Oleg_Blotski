import {client} from "../index"
import {gql} from "@apollo/client"

const GET_CATEGORIES = 'GET_CATEGORIES'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'

let initialState = {
    categories: [],
    currentCategory: null
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
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


export const getCategoriesActionCreator = categories => ({type: GET_CATEGORIES, categories})
export const setCurrentCategoryActionCreator = currentCategory => ({type: SET_CURRENT_CATEGORY, currentCategory})

export const getCategories = () => {

    return async dispatch => {
        client.query({
            query: gql`
                    query categories {
                     categories{
                       name
                     }
                    }
                    `
        })
            .then(result => {
                dispatch(getCategoriesActionCreator(result.data.categories))
                dispatch(setCurrentCategoryActionCreator(result.data.categories[0].name))
            })
    }
}

export const setCurrentCategory = (currentCategory) => {

    return async dispatch => {
        dispatch(setCurrentCategoryActionCreator(currentCategory))
    }
}


export default categoryReducer
