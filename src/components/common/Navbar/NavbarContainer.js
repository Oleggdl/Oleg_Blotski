import React, {Component} from 'react'
import NavbarComponent from "./NavbarComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {getProducts} from "../../../redux/product-reducer"
import {getCategories} from "../../../redux/category-reducer"
import {getCurrencies, setCurrentCurrency, setIsCartOverlay} from "../../../redux/navbar-reducer"

class NavbarContainer extends Component {

    constructor(props) {
        super(props)
        this.onCartOverlayHandler = this.onCartOverlayHandler.bind(this)
        this.state = {
            isCurrencyOpen: false
        }
        this.currencyRef = React.createRef()
        this.cartContainer = React.createRef()

        this.setIsCurrencyOpen = this.setIsCurrencyOpen.bind(this)
        this.currentCurrencyHandler = this.currentCurrencyHandler.bind(this)
    }

    setIsCurrencyOpen() {
        !!this.state.isCurrencyOpen ? this.setState({
            isCurrencyOpen: false
        }) : this.setState({
            isCurrencyOpen: true
        })
    }

    componentDidMount() {
        this.props.getCategories()
        this.props.getCurrencies()

        // window.addEventListener('click', (e) => {
        //         if (this.currencyRef.current) {
        //             if (e.target !== this.currencyRef.current) {
        //                 // this.setState({
        //                 //     isCurrencyOpen: false
        //                 // })
        //                 // console.log(e.target)
        //             }
        //         }
        //     }
        // )

        if (this.cartContainer) {
            window.addEventListener('mousedown', (e) => {
                    if (this.cartContainer.current) {
                        if (!this.cartContainer.current.contains(e.target)) {
                            this.props.setIsCartOverlay(false)
                        }
                    }
                }
            )
        }


    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.isCartOverlay !== prevProps.isCartOverlay) {
    //
    //     }
    //
    // }

    componentWillUnmount() {//todo
        // window.removeEventListener('click', (e) => {
        //     if (this.currencyRef.current) {
        //         if (e.target !== this.currencyRef.current) {
        //             // this.setState({
        //             //     isCurrencyOpen: false
        //             // })
        //             // console.log(e.target)
        //         }
        //     }
        // })

        window.removeEventListener('mousedown', (e) => {
                if (this.cartContainer.current) {
                    if (!this.cartContainer.current.contains(e.target)) {
                        this.props.setIsCartOverlay(false)
                    }
                }
            }
        )
    }

    setCategory = (value) => {
        this.props.getProducts(value)
    }

    onCartOverlayHandler() {
        this.props.isCartOverlay ? this.props.setIsCartOverlay(false) : this.props.setIsCartOverlay(true)
    }

    currentCurrencyHandler(currentCurrency) {
        this.props.setCurrentCurrency(currentCurrency)
        this.setState({
            isCurrencyOpen: false
        })
    }


    render() {
        return (
            <>
                <NavbarComponent categories={this.props.categories} setCategory={this.setCategory}
                                 state={this.state} onCartOverlayHandler={this.onCartOverlayHandler}
                                 isCartOverlay={this.props.isCartOverlay} currencies={this.props.currencies}
                                 setIsCurrencyOpen={this.setIsCurrencyOpen} isCurrencyOpen={this.state.isCurrencyOpen}
                                 currencyRef={this.currencyRef} currentCurrencyHandler={this.currentCurrencyHandler}
                                 currentCurrency={this.props.currentCurrency} cart={this.props.cart}
                                 cartContainer={this.cartContainer}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    isCartOverlay: state.navbarReducer.isCartOverlay,
    currencies: state.navbarReducer.currencies,
    currentCurrency: state.navbarReducer.currentCurrency,
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {getCategories, getProducts, setIsCartOverlay, getCurrencies, setCurrentCurrency})
)(NavbarContainer)
