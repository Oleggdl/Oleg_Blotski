import React, {Component} from 'react'
import CartOverlayComponent from "./CartOverlayComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setIsCartOverlay} from "../../redux/navbar-reducer"
import {setTotalAmount} from "../../redux/cart-reducer"
import {setProductAmount} from "../../redux/product-reducer";

class CartOverlayContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null
        }
        this.viewBagHandler = this.viewBagHandler.bind(this)
        this.setProductAmountHandler = this.setProductAmountHandler.bind(this)
    }

    updateTotalAmount() {
        const productPrice = this.props.cart && this.props.cart.map(product => {
                for (let price of product.prices) {
                    if (price.currency.label === this.props.currentCurrency.label) {
                        return price.amount * (!!this.props.productAmount[product.id]
                            ? this.props.productAmount[product.id] : null)
                    }
                }

            }
        )
        this.props.setTotalAmount((productPrice.reduce((a, b) => a + b, 0)).toFixed(2))
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

    setProductAmountHandler(id, value) {
        console.log({...this.props.productAmount, [id]: value})
        this.setProductAmount({[id]: value})
    }


    render() {
        return (
            <>
                <CartOverlayComponent cart={this.props.cart} cartContainer={this.props.cartContainer}
                                      viewBagHandler={this.viewBagHandler} totalAmount={this.props.totalAmount}
                                      currentCurrency={this.props.currentCurrency}
                                      setProductAmountHandler={this.setProductAmountHandler}
                />
            </>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cartReducer.cart,
    currentCurrency: state.navbarReducer.currentCurrency,
    totalAmount: state.cartReducer.totalAmount,
    productAmount: state.productReducer.productAmount
})

export default compose(
    connect(mapStateToProps, {setIsCartOverlay, setTotalAmount, setProductAmount})
)(CartOverlayContainer)
