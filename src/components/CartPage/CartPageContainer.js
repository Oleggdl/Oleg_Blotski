import React, {Component} from 'react'
import CartPageComponent from "./CartPageComponent"
import {compose} from "redux"
import {connect} from "react-redux"

class CartPageContainer extends Component {


    render() {
        return (
            <>
                <CartPageComponent cart={this.props.cart}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {})
)(CartPageContainer)
