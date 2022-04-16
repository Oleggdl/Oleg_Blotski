import React, {Component} from 'react'
import './ProductPage.scss'
import ProductGalleryContainer from "./MainImgSlider/ProductGalleryContainer"
import ProductAttributesContainer from "./ProductAttributes/ProductAttributesContainer"
import {NavLink} from "react-router-dom"
import {Interweave} from "interweave"

class ProductPageComponent extends Component {

    render() {

        const {
            currentPrice, addToCartHandler, cart, currentProduct, currentCurrency, selectAttributeHandler,
            attributes, isAllAttributesFill
        } = this.props

        const isAttributes = !!currentProduct.attributes.length
            ? (!isAllAttributesFill ? 'disabled-add-to-cart' : '') : ''
        const isProductInCart = cart.map(product => product.name === currentProduct.name)
        const isAllAttributes = !!currentProduct.attributes.length ? !isAllAttributesFill : ''

        return (
            <>
                <div className="product-page-container">
                    <ProductGalleryContainer currentProduct={currentProduct}/>
                    <div className="product-page-info">
                        <h2>{currentProduct.brand}</h2>
                        <p className="product-name">{currentProduct.name}</p>
                        {currentProduct.attributes && currentProduct.attributes.map(attribute =>
                            <ProductAttributesContainer key={attribute.id} attribute={attribute} attributes={attributes}
                                                        selectAttributeHandler={selectAttributeHandler}/>)}
                        <h3>Price:</h3>
                        <p className="product-price">{currentCurrency.symbol}{currentPrice}</p>
                        {!isProductInCart.includes(true)
                            ? <button disabled={!!currentProduct.inStock ? isAllAttributes : true}
                                      onClick={addToCartHandler}
                                      className={!!currentProduct.inStock ? isAttributes : 'disabled-add-to-cart'}>
                                Add to cart
                            </button>
                            : <NavLink to="/cart-page">
                                <button>View bag</button>
                            </NavLink>}
                        <div className="product-page-description">
                            <Interweave content={currentProduct.description}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductPageComponent
