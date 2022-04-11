import {client} from "../index"
import {gql} from "@apollo/client"

const GET_CATEGORIES = 'GET_CATEGORIES'

let initialState = {
    categories: []
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }

        default:
            return state
    }
}


export const getCategoriesActionCreator = categories => ({type: GET_CATEGORIES, categories})

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
            .then(result => dispatch(getCategoriesActionCreator(result.data.categories)))
    }
}


export default categoryReducer
