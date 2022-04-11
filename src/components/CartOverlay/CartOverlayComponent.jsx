import React, {Component} from 'react'
import './CartOverlay.scss'
import CartOverlayElement from "./CartOverlayElement/CartOverlayElement"
import {NavLink} from "react-router-dom"

class CartOverlayComponent extends Component {


    render() {
        return (
            <>
                <div className="cart-overlay-container">
                    <h3>My Bag, <span>2 items</span></h3>
                    {this.props.cart && this.props.cart.map(product => <CartOverlayElement key={product.id}
                                                                                           product={product}/>)}
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
