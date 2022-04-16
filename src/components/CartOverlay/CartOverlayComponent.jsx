import React, {Component} from 'react'
import './CartOverlay.scss'
import {NavLink} from "react-router-dom"
import CartElementContainer from "../common/Cart/CartElementContainer"

class CartOverlayComponent extends Component {

    render() {

        const {cart, cartContainer, viewBagHandler, currentCurrency, totalAmount} = this.props

        return (
            <>
                <aside className="cart-overlay-container" ref={cartContainer}>
                    <h3>My Bag, <span>{cart.length} items</span></h3>
                    {cart && cart.map(product => <CartElementContainer key={product.id} product={product}
                                                                       isOverlay={true}/>)}
                    <div className="cart-overlay-total-cost">
                        <h4>Total</h4>
                        <p>{currentCurrency.symbol}{totalAmount}</p>
                    </div>
                    <div className="cart-overlay-buttons">
                        <NavLink to="/cart-page">
                            <button onClick={viewBagHandler}>View bag</button>
                        </NavLink>
                        <button onClick={() => console.log(cart)}>Check out</button>
                    </div>
                </aside>
            </>
        )
    }
}

export default CartOverlayComponent
