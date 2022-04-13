import React, {Component} from 'react'
import NavbarComponent from "./NavbarComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {getProducts} from "../../../redux/product-reducer"
import {getCategories, setCurrentCategory} from "../../../redux/category-reducer"
import {getCurrencies, setCurrentCurrency, setIsCartOverlay, setIsCurrencyMenu} from "../../../redux/navbar-reducer"

class NavbarContainer extends Component {

    constructor(props) {
        super(props)
        this.onCartOverlayHandler = this.onCartOverlayHandler.bind(this)
        this.currencyRef = React.createRef()
        this.currencyBtnRef = React.createRef()
        this.cartContainer = React.createRef()
        this.cartBtnRef = React.createRef()

        this.currentCurrencyHandler = this.currentCurrencyHandler.bind(this)
        this.isCurrencyMenuHandler = this.isCurrencyMenuHandler.bind(this)
    }

    componentDidMount() {
        this.props.getCategories()
        this.props.getCurrencies()

        if (this.cartContainer) {
            window.addEventListener('mousedown', (e) => {
                    if (this.cartContainer.current) {
                        if (!this.cartContainer.current.contains(e.target)
                            && !this.cartBtnRef.current.contains(e.target)) {
                            this.props.setIsCartOverlay(false)
                        }
                    }
                }
            )
        }
        if (this.currencyRef) {
            window.addEventListener('mousedown', (e) => {
                    if (this.currencyRef.current) {
                        if (!this.currencyRef.current.contains(e.target)
                            && !this.currencyBtnRef.current.contains(e.target)) {
                            this.props.setIsCurrencyMenu(false)
                        }
                    }
                }
            )
        }
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', (e) => {
                if (this.cartContainer.current) {
                    if (!this.cartContainer.current.contains(e.target)
                        && !this.cartBtnRef.current.contains(e.target)) {
                        this.props.setIsCartOverlay(false)
                    }
                }
            }
        )
        window.removeEventListener('mousedown', (e) => {
                if (this.currencyRef.current) {
                    if (!this.currencyRef.current.contains(e.target)
                        && !this.currencyBtnRef.current.contains(e.target)) {
                        this.props.setIsCurrencyMenu(false)
                    }
                }
            }
        )
    }

    setCategory = (value) => {
        this.props.getProducts(value)
        this.props.setCurrentCategory(value)
    }

    onCartOverlayHandler() {
        this.props.isCartOverlay ? this.props.setIsCartOverlay(false) : this.props.setIsCartOverlay(true)
    }

    currentCurrencyHandler(currentCurrency) {
        this.props.setCurrentCurrency(currentCurrency)
        this.props.isCurrencyMenu ? this.props.setIsCurrencyMenu(false) : this.props.setIsCurrencyMenu(true)
    }

    isCurrencyMenuHandler() {
        this.props.isCurrencyMenu ? this.props.setIsCurrencyMenu(false) : this.props.setIsCurrencyMenu(true)
    }


    render() {
        return (
            <>
                <NavbarComponent categories={this.props.categories} setCategory={this.setCategory}
                                 state={this.state} onCartOverlayHandler={this.onCartOverlayHandler}
                                 isCartOverlay={this.props.isCartOverlay} currencies={this.props.currencies}
                                 isCurrencyMenu={this.props.isCurrencyMenu} cartBtnRef={this.cartBtnRef}
                                 currencyRef={this.currencyRef} currentCurrencyHandler={this.currentCurrencyHandler}
                                 currentCurrency={this.props.currentCurrency} cart={this.props.cart}
                                 cartContainer={this.cartContainer} currencyBtnRef={this.currencyBtnRef}
                                 isCurrencyMenuHandler={this.isCurrencyMenuHandler}
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
    currencies: state.navbarReducer.currencies,
    currentCurrency: state.navbarReducer.currentCurrency,
    cart: state.cartReducer.cart,
    currentCategory: state.categoryReducer.currentCategory
})

export default compose(
    connect(mapStateToProps, {
        getCategories, getProducts, setIsCartOverlay, getCurrencies, setCurrentCurrency, setCurrentCategory,
        setIsCurrencyMenu
    })
)(NavbarContainer)
