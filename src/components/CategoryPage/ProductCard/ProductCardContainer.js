import React, {Component} from 'react'
import ProductCardComponent from "./ProductCardComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setCurrentProduct} from "../../../redux/product-reducer"

class ProductCardContainer extends Component {

    constructor(props) {
        super(props)
        this.currentProductHandler = this.currentProductHandler.bind(this)
        this.addToCartHandler = this.addToCartHandler.bind(this)

    }

    currentProductHandler() {
        this.props.setCurrentProduct(this.props.product)
    }

    addToCartHandler() {
        this.props.addProductToCart(this.props.currentProduct)
    }

    render() {
        return (
            <>
                <ProductCardComponent product={this.props.product} currentProductHandler={this.currentProductHandler}
                                      addToCartHandler={this.addToCartHandler}/>
            </>
        )
    }
}

export default compose(
    connect(null, {setCurrentProduct})
)(ProductCardContainer)
