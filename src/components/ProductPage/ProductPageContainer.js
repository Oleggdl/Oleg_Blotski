import React, {Component} from 'react'
import ProductPageComponent from "./ProductPageComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {addProductToCart} from "../../redux/cart-reducer"

class ProductPageContainer extends Component {

    constructor(props) {
        super(props)
        this.addToCartHandler = this.addToCartHandler.bind(this)
    }

    addToCartHandler() {
        this.props.addProductToCart(this.props.currentProduct)
    }

    render() {
        return (
            <>
                <ProductPageComponent currentProduct={this.props.currentProduct}
                                      addToCartHandler={this.addToCartHandler}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentProduct: state.productReducer.currentProduct
})

export default compose(
    connect(mapStateToProps, {addProductToCart})
)(ProductPageContainer)
