import React, {Component} from 'react'
import './ProductCard.scss'
import SvgSelector from "../../common/SvgSelector"
import {NavLink} from "react-router-dom";

class ProductCardComponent extends Component {


    render() {
        return (
            <>
                <NavLink to="product-page">
                    <div className="product-card-container" onClick={this.props.currentProductHandler}>
                        <div className="product-img">
                            <img src={this.props.product.gallery[0]} alt="product image"/>
                        </div>
                        <div className="circle-cart-icon">
                            <SvgSelector svgName="circle-cart-icon" onClick={this.props.addToCartHandler}/>
                        </div>
                        <div className="product-card-content">
                            <h4>{this.props.product.name}</h4>
                            <p>$50.00</p>
                        </div>
                    </div>
                </NavLink>
            </>
        )
    }
}

export default ProductCardComponent
