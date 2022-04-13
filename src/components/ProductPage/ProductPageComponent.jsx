import React, {Component} from 'react'
import './ProductPage.scss'
import ProductGalleryContainer from "./MainImgSlider/ProductGalleryContainer"
import ProductAttributesContainer from "./ProductAttributes/ProductAttributesContainer";
import {NavLink} from "react-router-dom";

class ProductPageComponent extends Component {


    render() {

        const isAllAttributesAndInStock = !this.props.isAllAttributesFill
            ? 'disabled-add-to-cart' : ''
            || !this.props.currentProduct.inStock ? 'disabled-add-to-cart' : ''

        const isProductInCart = this.props.cart.map(product => product.name === this.props.currentProduct.name)

        return (
            <>
                <div className="product-page-container">
                    <ProductGalleryContainer currentProduct={this.props.currentProduct}/>
                    <div className="product-page-info">
                        <h2>{this.props.currentProduct.brand}</h2>
                        <p className="product-name">{this.props.currentProduct.name}</p>
                        {this.props.currentProduct.attributes && this.props.currentProduct.attributes.map(attribute =>
                            <ProductAttributesContainer key={attribute.id} attribute={attribute}
                                                        attributes={this.props.attributes}
                                                        selectAttributeHandler={this.props.selectAttributeHandler}/>)}
                        <h3>Price:</h3>
                        <p className="product-price">{this.props.currentCurrency.symbol}{this.props.currentPrice}</p>
                        {!isProductInCart.includes(true)
                            ? <button disabled={!!this.props.currentProduct.attributes.length
                                ? (!this.props.isAllAttributesFill || !this.props.currentProduct.inStock) : ''}
                                      onClick={this.props.addToCartHandler}
                                      className={!!this.props.currentProduct.attributes.length
                                          ? isAllAttributesAndInStock : ''}>
                                Add to cart
                            </button>
                            : <NavLink to="/cart-page">
                                <button>View bag</button>
                            </NavLink>}
                        <div className="product-page-description"
                             dangerouslySetInnerHTML={{__html: this.props.currentProduct.description}}/>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductPageComponent
