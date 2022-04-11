import React, {Component} from 'react'
import CartElementComponent from "./CartElementComponent"

class CartElementContainer extends Component {


    render() {
        return (
            <>
                <CartElementComponent product={this.props.product}/>
            </>
        )
    }
}

export default CartElementContainer
