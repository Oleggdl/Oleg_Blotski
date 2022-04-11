import React, {Component} from 'react'
import './Navbar.scss'
import SvgSelector from "../SvgSelector"
import CartOverlayContainer from "../../CartOverlay/CartOverlayContainer"
import {NavLink} from "react-router-dom";

class NavbarComponent extends Component {


    render() {
        return (
            <>
                <header className="category-header">
                    <nav className="category-nav">
                        <ul>
                            {this.props.categories.map((category, index) =>
                                <NavLink to="/" key={index} className="category-link"
                                         onClick={() => this.props.setCategory(category.name)}>{category.name}</NavLink>)}
                        </ul>
                    </nav>
                    <div className="storefront-logo">
                        <SvgSelector svgName="brand-icon"/>
                    </div>
                    <div className="header-actions">
                        <div className="dollar-icon">
                            <SvgSelector svgName="dollar-icon"/>
                        </div>
                        <div className="arrow-down-icon">
                            <SvgSelector svgName="arrow-down-icon"/>
                        </div>
                        <div className="cart-icon" onClick={this.props.onCartOverlayHandler}>
                            <SvgSelector svgName="cart-icon"/>
                        </div>
                        {this.props.isCartOverlay && <CartOverlayContainer/>}
                    </div>
                </header>
            </>
        )
    }
}

export default NavbarComponent
