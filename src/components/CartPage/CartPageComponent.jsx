import React, {Component} from 'react'
import './CartPage.scss'
import CartElementContainer from "./CartElement/CartElementContainer"

class CartPageComponent extends Component {

    render() {

        return (
            <>
                <div className="cart-page-container">
                    <h2>Cart</h2>
                    {this.props.cart.length === 0 ? <h3 className="empty-cart-title">Cart is empty</h3>
                        : this.props.cart && this.props.cart.map(product => <CartElementContainer key={product.id}
                                                                                                  product={product}/>)}
                </div>
            </>
        )
    }
}

export default CartPageComponent
