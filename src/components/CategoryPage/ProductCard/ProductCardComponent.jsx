import React, {Component} from 'react'
import './ProductCard.scss'
import SvgSelector from "../../common/SvgSelector"
import {NavLink} from "react-router-dom"

class ProductCardComponent extends Component {


    render() {
        return (
            <>
                <div className="product-card-container" onClick={this.props.currentProductHandler}>
                    <NavLink to="product-page">
                        <div className="product-img">
                            {!this.props.product.inStock && <div className="is-in-stock">Out of stock</div>}
                            <img className={!this.props.product.inStock ? 'out-of-stock-img' : null}
                                 src={this.props.product.gallery[0]} alt="product image"/>
                        </div>
                        <div
                            className={!this.props.product.inStock
                                ? 'product-card-content out-of-stock-text' : 'product-card-content '}>
                            <h4>{this.props.product.name}</h4>
                            <p>{this.props.currentCurrency.symbol}{this.props.currentPrice}</p>
                        </div>
                    </NavLink>
                    <div className="circle-cart-icon" onClick={this.props.addToCartHandler}>
                        <SvgSelector svgName="circle-cart-icon"/>
                    </div>
                </div>

            </>
        )
    }
}

export default ProductCardComponent
