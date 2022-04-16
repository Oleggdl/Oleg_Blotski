import React, {Component} from 'react'
import NavbarComponent from "./NavbarComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {getProducts} from "../../../redux/product-reducer"
import {getCategories, setCurrentCategory} from "../../../redux/category-reducer"
import {getCurrencies, setIsCartOverlay, setIsCurrencyMenu} from "../../../redux/navbar-reducer"

class NavbarContainer extends Component {

    constructor(props) {
        super(props)
        this.currencyRef = React.createRef()
        this.currencyBtnRef = React.createRef()
        this.cartContainer = React.createRef()
        this.cartBtnRef = React.createRef()
        this.onCartOverlayHandler = this.onCartOverlayHandler.bind(this)
        this.isCurrencyMenuHandler = this.isCurrencyMenuHandler.bind(this)
    }

    componentDidMount() {
        this.props.getCategories()
        this.props.getCurrencies()
    }

    setCategory = (value) => {
        this.props.getProducts(value)
        this.props.setCurrentCategory(value)
    }

    onCartOverlayHandler() {
        this.props.isCartOverlay ? this.props.setIsCartOverlay(false) : this.props.setIsCartOverlay(true)
    }

    isCurrencyMenuHandler() {
        this.props.isCurrencyMenu ? this.props.setIsCurrencyMenu(false) : this.props.setIsCurrencyMenu(true)
    }

    render() {
        return (
            <>
                <NavbarComponent categories={this.props.categories} onCartOverlayHandler={this.onCartOverlayHandler}
                                 setCategory={this.setCategory} isCartOverlay={this.props.isCartOverlay}
                                 isCurrencyMenu={this.props.isCurrencyMenu} cartBtnRef={this.cartBtnRef}
                                 currencyRef={this.currencyRef} currentCurrency={this.props.currentCurrency}
                                 cartContainer={this.cartContainer} currencyBtnRef={this.currencyBtnRef}
                                 isCurrencyMenuHandler={this.isCurrencyMenuHandler} cart={this.props.cart}
                                 currentCategory={this.props.currentCategory}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    isCartOverlay: state.navbarReducer.isCartOverlay,
    isCurrencyMenu: state.navbarReducer.isCurrencyMenu,
    currentCurrency: state.navbarReducer.currentCurrency,
    currentCategory: state.categoryReducer.currentCategory,
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {
        getCategories, getProducts, setIsCartOverlay, getCurrencies, setCurrentCategory, setIsCurrencyMenu
    })
)(NavbarContainer)
