import React, {Component} from 'react'
import './ProductPage.scss'

class ProductPageComponent extends Component {


    render() {

        return (
            <>
                <div className="product-page-container">
                    <div className="product-gallery">
                        {this.props.currentProduct.gallery && this.props.currentProduct.gallery.map((img, index) =>
                            <div key={index}>
                                <img src={img} alt="product image"/>
                            </div>)}
                    </div>
                    <div className="product-main-image">
                        <img src={this.props.currentProduct.gallery && this.props.currentProduct.gallery[0]}
                             alt="main product image"/>
                    </div>
                    <div className="product-page-info">
                        <h2>{this.props.currentProduct.brand}</h2>
                        <p className="product-name">{this.props.currentProduct.name}</p>
                        <h3>Size:</h3>
                        <div className="product-page-attributes">
                            <div>XS</div>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>
                        <h3>Price:</h3>
                        <p className="product-price">$50.00</p>
                        <button onClick={this.props.addToCartHandler}>Add to cart</button>
                        <p className="product-page-description">{this.props.currentProduct.description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductPageComponent
