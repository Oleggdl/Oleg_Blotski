import React, {Component} from 'react'
import './ProductCard.scss'
import SvgSelector from "../../common/SvgSelector"
import {NavLink} from "react-router-dom"

class ProductCardComponent extends Component {

    render() {

        const {currentPrice, product, cart, currentCurrency, addToCartHandler, currentProductHandler} = this.props
        const isProductInCart = cart?.map(productCart => productCart.name === product.name)

        return (
            <>
                <div className="product-card-container" onClick={currentProductHandler}>
                    <NavLink to="product-page">
                        <div className="product-img">
                            {!product.inStock && <div className="is-in-stock">Out of stock</div>}
                            <img className={!product.inStock ? 'out-of-stock-img' : null}
                                 src={product.gallery[0]} alt="product"/>
                        </div>
                        <div className={!product.inStock
                            ? 'product-card-content out-of-stock-text' : 'product-card-content '}>
                            <h4>{product.name}</h4>
                            <p>{currentCurrency.symbol}{currentPrice}</p>
                        </div>
                    </NavLink>
                    {!isProductInCart.includes(true)
                        ? <div className={!!product.inStock
                            ? 'circle-cart-icon'
                            : 'circle-cart-icon cart-icon-disabled'}
                               onClick={addToCartHandler}>
                            <SvgSelector svgName="circle-cart-icon"/>
                        </div>
                        : <NavLink to="/cart-page">
                            <div className="circle-cart-icon">
                                <SvgSelector svgName="circle-cart-icon"/>
                            </div>
                        </NavLink>}
                </div>
            </>
        )
    }
}

export default ProductCardComponent

