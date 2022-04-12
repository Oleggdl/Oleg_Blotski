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
        this.state = {
            currentPrice: null
        }

    }

    componentDidMount() {
        for (let price of this.props.product.prices) {
            if (price.currency.label === this.props.currentCurrency.label) {
                this.setState({
                    currentPrice: price.amount
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentCurrency !== prevProps.currentCurrency) {
            for (let price of this.props.product.prices) {
                if (price.currency.label === this.props.currentCurrency.label) {
                    this.setState({
                        currentPrice: price.amount
                    })
                }
            }
        }
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
                                      addToCartHandler={this.addToCartHandler} currentPrice={this.state.currentPrice}
                                      currentCurrency={this.props.currentCurrency}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCurrency: state.navbarReducer.currentCurrency
})

export default compose(
    connect(mapStateToProps, {setCurrentProduct})
)(ProductCardContainer)
