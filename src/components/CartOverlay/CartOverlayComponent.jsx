import React, {Component} from 'react'
import './CartOverlay.scss'
import {NavLink} from "react-router-dom"
import CartOverlayElementContainer from "./CartOverlayElement/CartOverlayElementContainer";

class CartOverlayComponent extends Component {


    render() {
        return (
            <>
                <div className="cart-overlay-container">
                    <h3>My Bag, <span>{this.props.cart.length} items</span></h3>
                    {this.props.cart && this.props.cart.map(product =>
                        <CartOverlayElementContainer key={product.id} product={product}/>)}
                    <div className="cart-overlay-total-cost">
                        <h4>Total</h4>
                        <p>$100.00</p>
                    </div>
                    <div className="cart-overlay-buttons">
                        <NavLink to="/cart-page">
                            <button>View bag</button>
                        </NavLink>
                        <button>Check out</button>
                    </div>
                </div>
            </>
        )
    }
}

export default CartOverlayComponent
