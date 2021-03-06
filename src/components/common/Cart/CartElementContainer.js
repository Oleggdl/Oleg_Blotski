import React, {Component} from 'react'
import {compose} from "redux"
import {connect} from "react-redux"
import {deleteProductFromCart} from "../../../redux/cart-reducer"
import {setProductAmount, unsetProductAmount} from "../../../redux/product-reducer"
import CartElementComponent from "../../CartPage/CartElement/CartElementComponent"
import CartOverlayElement from "../../CartOverlay/CartOverlayElement/CartOverlayElement"

class CartElementContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null
        }
        this.deleteProductHandler = this.deleteProductHandler.bind(this)
        this.increaseAmount = this.increaseAmount.bind(this)
        this.decreaseAmount = this.decreaseAmount.bind(this)
    }

    componentDidMount() {
        for (let price of this.props.product?.prices) {
            if (price.currency.label === this.props.currentCurrency.label) {
                this.setState({
                    currentPrice: price.amount
                })
            }
        }
        !this.props.productAmount[this.props.product.id]
            ? this.props.setProductAmount(this.props.product.id, 1)
            : this.props.setProductAmount(this.props.product.id, this.props.productAmount[this.props.product.id])
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.product !== prevProps.product
            || this.props.currentCurrency !== prevProps.currentCurrency) {
            for (let price of this.props.product?.prices) {
                if (price.currency.label === this.props.currentCurrency.label) {
                    this.setState({
                        currentPrice: price.amount
                    })
                }
            }
        }

        if (this.props.productAmount !== prevProps.productAmount) {
            window.sessionStorage.setItem('productAmount', JSON.stringify(this.props.productAmount))
        }
    }

    deleteProductHandler() {
        this.props.deleteProductFromCart(this.props.cart.filter(product => product.id !== this.props.product.id))
        this.props.unsetProductAmount(this.props.product.id)
    }

    increaseAmount() {
        if (this.props.productAmount[this.props.product.id] <= 9) {
            this.props.setProductAmount(this.props.product.id, this.props.productAmount[this.props.product.id] + 1)
        }
    }

    decreaseAmount() {
        if (this.props.productAmount[this.props.product.id] >= 2) {
            this.props.setProductAmount(this.props.product.id, this.props.productAmount[this.props.product.id] - 1)
        }
    }

    render() {
        return (
            <>
                {this.props.isOverlay
                    ? <CartOverlayElement product={this.props.product} currentPrice={this.state.currentPrice}
                                          currentCurrency={this.props.currentCurrency}
                                          productAmount={this.props.productAmount}
                                          increaseAmount={this.increaseAmount}
                                          decreaseAmount={this.decreaseAmount}
                                          deleteProductHandler={this.deleteProductHandler}/>
                    : <CartElementComponent product={this.props.product} currentCurrency={this.props.currentCurrency}
                                            currentPrice={this.state.currentPrice}
                                            productAmount={this.props.productAmount}
                                            increaseAmount={this.increaseAmount}
                                            decreaseAmount={this.decreaseAmount}
                                            deleteProductHandler={this.deleteProductHandler}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCurrency: state.navbarReducer.currentCurrency,
    productAmount: state.productReducer.productAmount,
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {deleteProductFromCart, setProductAmount, unsetProductAmount})
)(CartElementContainer)

