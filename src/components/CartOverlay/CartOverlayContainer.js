import React, {Component} from 'react'
import CartOverlayComponent from "./CartOverlayComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setIsCartOverlay} from "../../redux/navbar-reducer"
import {setTotalAmount} from "../../redux/cart-reducer";

class CartOverlayContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null
        }
        this.viewBagHandler = this.viewBagHandler.bind(this)
    }

    updateTotalAmount() {
        const productPrice = this.props.cart && this.props.cart.map(product => {
                for (let price of product.prices) {
                    if (price.currency.label === this.props.currentCurrency.label) {
                        return price.amount
                    }
                }
            }
        )
        this.props.setTotalAmount(productPrice.reduce((acc, num) => acc + num, 0).toFixed(2))
    }

    componentDidMount() {
        this.updateTotalAmount()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateTotalAmount()
    }

    viewBagHandler() {
        this.props.setIsCartOverlay(false)
    }

    render() {
        return (
            <>
                <CartOverlayComponent cart={this.props.cart} cartContainer={this.props.cartContainer}
                                      viewBagHandler={this.viewBagHandler} totalAmount={this.props.totalAmount}
                                      currentCurrency={this.props.currentCurrency}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart,
    currentCurrency: state.navbarReducer.currentCurrency,
    totalAmount: state.cartReducer.totalAmount
})

export default compose(
    connect(mapStateToProps, {setIsCartOverlay, setTotalAmount})
)(CartOverlayContainer)
