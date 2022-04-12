import React, {Component} from 'react'
import CartOverlayComponent from "./CartOverlayComponent"
import {compose} from "redux"
import {connect} from "react-redux"

class CartOverlayContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null
        }
    }

    componentDidMount() {

        // console.log(this.props.cart)
        // for (let price of this.props.product.prices) {
        //     if (price.currency.label === this.props.currentCurrency.label) {
        //         this.setState({
        //             currentPrice: price.amount
        //         })
        //     }
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (this.props.currentCurrency !== prevProps.currentCurrency) {
        //     for (let price of this.props.product.prices) {
        //         if (price.currency.label === this.props.currentCurrency.label) {
        //             this.setState({
        //                 currentPrice: price.amount
        //             })
        //         }
        //     }
        // }
    }

    render() {
        return (
            <>
                <CartOverlayComponent cart={this.props.cart}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart,
    currentCurrency: state.navbarReducer.currentCurrency
})

export default compose(
    connect(mapStateToProps, {})
)(CartOverlayContainer)
