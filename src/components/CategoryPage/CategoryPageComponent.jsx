import React, {Component} from 'react'
import './CategoryPage.scss'
import ProductCardContainer from "./ProductCard/ProductCardContainer"


class CategoryPageComponent extends Component {

    render() {
        return (
            <>
                <div className="category-container">
                    {this.props.isCartOverlay && <div className="cart-overlay-wrapper" ref={this.props.cartWrapper}>
                    </div>}
                    <h1>{this.props.products.name}</h1>
                    <div className="category-products">
                        {this.props.products.products && this.props.products.products.map(product =>
                            <ProductCardContainer key={product.id}
                                                  product={product}/>)}
                    </div>
                </div>
            </>
        )
    }
}

export default CategoryPageComponent
