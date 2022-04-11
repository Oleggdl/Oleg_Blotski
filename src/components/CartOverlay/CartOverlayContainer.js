import React, {Component} from 'react'
import CartOverlayComponent from "./CartOverlayComponent"
import {compose} from "redux"
import {connect} from "react-redux"

class CartOverlayContainer extends Component {


    render() {
        return (
            <>
                <CartOverlayComponent cart={this.props.cart}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {})
)(CartOverlayContainer)
