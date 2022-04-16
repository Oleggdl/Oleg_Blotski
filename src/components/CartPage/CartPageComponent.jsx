import React, {Component} from 'react'
import './CartPage.scss'
import CartElementContainer from "../common/Cart/CartElementContainer"

class CartPageComponent extends Component {

    render() {

        const {cart} = this.props

        return (
            <>
                <section className="cart-page-container">
                    <h2>Cart</h2>
                    {cart.length === 0
                        ? <h3 className="empty-cart-title">Cart is empty</h3>
                        : cart && cart.map(product =>
                        <CartElementContainer key={product.id} product={product} isOverlay={false}/>)}
                </section>
            </>
        )
    }
}

export default CartPageComponent
