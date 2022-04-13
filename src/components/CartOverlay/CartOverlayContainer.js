import React, {Component} from 'react'
import CartOverlayComponent from "./CartOverlayComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setIsCartOverlay} from "../../redux/navbar-reducer"

class CartOverlayContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null
        }
        this.viewBagHandler = this.viewBagHandler.bind(this)
    }

    viewBagHandler() {
        this.props.setIsCartOverlay(false)
    }

    render() {
        return (
            <>
                <CartOverlayComponent cart={this.props.cart} cartContainer={this.props.cartContainer}
                                      viewBagHandler={this.viewBagHandler}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart,
    currentCurrency: state.navbarReducer.currentCurrency
})

export default compose(
    connect(mapStateToProps, {setIsCartOverlay})
)(CartOverlayContainer)
