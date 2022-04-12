import React, {Component} from 'react'
import './ProductPage.scss'
import ProductGalleryContainer from "./MainImgSlider/ProductGalleryContainer"
import ProductAttributesContainer from "./ProductAttributes/ProductAttributesContainer";

class ProductPageComponent extends Component {


    render() {

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
                        <button disabled={!this.props.isAllAttributesFill} onClick={this.props.addToCartHandler}
                                className={!this.props.isAllAttributesFill ? 'disabled-add-to-cart' : ''}>
                            Add to cart
                        </button>
                        <p className="product-page-description">{this.props.currentProduct.description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductPageComponent
