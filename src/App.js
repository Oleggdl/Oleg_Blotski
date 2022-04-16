import React, {Component} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/redux-store"
import CategoryPageContainer from "./components/CategoryPage/CategoryPageContainer"
import ProductPageContainer from "./components/ProductPage/ProductPageContainer"
import NavbarContainer from "./components/common/Navbar/NavbarContainer"
import CartPageContainer from "./components/CartPage/CartPageContainer"

class App extends Component {

    render() {
        return (
            <>
                <BrowserRouter>
                    <Provider store={store}>
                        <NavbarContainer/>
                        <Routes>
                            <Route path="/" element={<CategoryPageContainer/>}/>
                            <Route path="category-page" element={<CategoryPageContainer/>}/>
                            <Route path="product-page" element={<ProductPageContainer/>}/>
                            <Route path="cart-page" element={<CartPageContainer/>}/>
                        </Routes>
                    </Provider>
                </BrowserRouter>
            </>
        )
    }
}

export default App
