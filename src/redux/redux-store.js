import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import productReducer from "./product-reducer"
import categoryReducer from "./category-reducer"
import navbarReducer from "./navbar-reducer"
import cartReducer from "./cart-reducer"

let reducers = combineReducers({
    productReducer: productReducer,
    categoryReducer: categoryReducer,
    navbarReducer: navbarReducer,
    cartReducer: cartReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
