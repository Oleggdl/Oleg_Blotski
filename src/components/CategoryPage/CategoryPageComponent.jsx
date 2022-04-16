import React, {Component} from 'react'
import './CategoryPage.scss'
import ProductCardContainer from "./ProductCard/ProductCardContainer"

class CategoryPageComponent extends Component {

    render() {

        const {products} = this.props

        return (
            <>
                <div className="category-container">
                    <h1>{products.name}</h1>
                    <div className="category-products">
                        {products.products && products.products.map(product =>
                            <ProductCardContainer key={product.id} product={product}/>)}
                    </div>
                </div>
            </>
        )
    }
}

export default CategoryPageComponent
