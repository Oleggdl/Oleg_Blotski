import React, {Component} from 'react'
import './Navbar.scss'
import SvgSelector from "../SvgSelector"
import CartOverlayContainer from "../../CartOverlay/CartOverlayContainer"
import {NavLink} from "react-router-dom"
import CurrencyContainer from "../CurrencyOverlay/CurrencyContainer"

class NavbarComponent extends Component {

    render() {

        const {
            categories, currentCategory, setCategory, currencyBtnRef, isCurrencyMenuHandler, currentCurrency,
            isCurrencyMenu, currencyRef, cartBtnRef, cartContainer, isCartOverlay, onCartOverlayHandler, cart
        } = this.props

        return (
            <>
                <header className="header">
                    <nav className="category-nav">
                        <ul>
                            {categories.map((category, index) =>
                                <NavLink to="/" key={index} className={currentCategory === category.name
                                    ? 'category-link active-link' : 'category-link'}
                                         onClick={() => setCategory(category.name)}>{category.name}
                                </NavLink>)}
                        </ul>
                    </nav>
                    <div className="storefront-logo">
                        <SvgSelector svgName="brand-icon"/>
                    </div>
                    <div className="header-actions">
                        <div className="currency-icons" ref={currencyBtnRef}
                             onClick={isCurrencyMenuHandler}>
                            <span className="currency-icon">{currentCurrency.symbol}</span>
                            <span className="arrow-icon">{!isCurrencyMenu
                                ? <SvgSelector svgName="arrow-down-icon"/>
                                : <SvgSelector svgName="arrow-up-icon"/>}
                            </span>
                        </div>
                        {isCurrencyMenu && <CurrencyContainer currencyRef={currencyRef}
                                                              currencyBtnRef={currencyBtnRef}/>}
                        <div className="cart-icon" ref={cartBtnRef}
                             onClick={onCartOverlayHandler}>
                            <SvgSelector svgName="cart-icon"/>
                            {cart.length !== 0 ? <div className="cart-product-count">{cart.length}</div> : null}
                        </div>
                        {isCartOverlay && <CartOverlayContainer cartContainer={cartContainer} cartBtnRef={cartBtnRef}/>}
                    </div>
                </header>
                {isCartOverlay && <div className="cart-overlay-wrapper"></div>}
            </>
        )
    }
}

export default NavbarComponent
