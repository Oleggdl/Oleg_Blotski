import React, {Component} from 'react'
import './Navbar.scss'
import SvgSelector from "../SvgSelector"
import CartOverlayContainer from "../../CartOverlay/CartOverlayContainer"
import {NavLink} from "react-router-dom"

class NavbarComponent extends Component {


    render() {
        return (
            <>
                <header className="header">
                    <nav className="category-nav">
                        <ul>
                            {this.props.categories.map((category, index) =>
                                <NavLink to="/" key={index} className="category-link"
                                         onClick={() => this.props.setCategory(category.name)}>{category.name}
                                </NavLink>)}
                        </ul>
                    </nav>
                    <div className="storefront-logo">
                        <SvgSelector svgName="brand-icon"/>
                    </div>
                    <div className="header-actions">
                        <div className="currency-icons" ref={this.props.currencyBtnRef}
                             onClick={this.props.isCurrencyMenuHandler}>
                            <span className="currency-icon">{this.props.currentCurrency.symbol}</span>
                            <span className="arrow-icon">{!this.props.isCurrencyMenu
                                ? <SvgSelector svgName="arrow-down-icon"/>
                                : <SvgSelector svgName="arrow-up-icon"/>}
                            </span>
                        </div>
                        {this.props.isCurrencyMenu &&
                            <div className="currencies-container" ref={this.props.currencyRef}>
                                {this.props.currencies && this.props.currencies.map((currency, index) =>
                                    <div key={index} onClick={() => this.props.currentCurrencyHandler(currency)}>
                                        <span>{currency.symbol}</span>{currency.label}</div>)}
                            </div>}
                        <div className="cart-icon" ref={this.props.cartBtnRef}
                             onClick={this.props.onCartOverlayHandler}>
                            <SvgSelector svgName="cart-icon"/>
                            <div className="cart-product-count">{this.props.cart.length}</div>
                        </div>

                        {this.props.isCartOverlay && <CartOverlayContainer cartContainer={this.props.cartContainer}/>}
                    </div>
                </header>
                {this.props.isCartOverlay && <div className="cart-overlay-wrapper">
                </div>}
            </>
        )
    }
}

export default NavbarComponent
