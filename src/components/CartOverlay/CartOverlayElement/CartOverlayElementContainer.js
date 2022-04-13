import React, {Component} from 'react'
import CartOverlayElement from "./CartOverlayElement"
import {compose} from "redux"
import {connect} from "react-redux"
import {deleteProductFromCart} from "../../../redux/cart-reducer"
import {setProductAmount} from "../../../redux/product-reducer"

class CartOverlayElementContainer extends Component {

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
    }


    deleteProductHandler() {
        this.props.deleteProductFromCart(this.props.cart.filter(product => product.id !== this.props.product.id))
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
                <CartOverlayElement product={this.props.product} currentPrice={this.state.currentPrice}
                                    currentCurrency={this.props.currentCurrency}
                                    productAmount={this.props.productAmount}
                                    increaseAmount={this.increaseAmount}
                                    decreaseAmount={this.decreaseAmount}
                                    deleteProductHandler={this.deleteProductHandler}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentProduct: state.productReducer.currentProduct,
    currentCurrency: state.navbarReducer.currentCurrency,
    productAmount: state.productReducer.productAmount,
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {deleteProductFromCart, setProductAmount})
)(CartOverlayElementContainer)

