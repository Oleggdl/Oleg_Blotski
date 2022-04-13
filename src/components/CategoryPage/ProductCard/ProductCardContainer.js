import React, {Component} from 'react'
import ProductCardComponent from "./ProductCardComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setCurrentProduct} from "../../../redux/product-reducer"
import {addProductToCart} from "../../../redux/cart-reducer";

class ProductCardContainer extends Component {

    constructor(props) {
        super(props)
        this.currentProductHandler = this.currentProductHandler.bind(this)
        this.addToCartHandler = this.addToCartHandler.bind(this)
        this.selectAttributeHandler = this.selectAttributeHandler.bind(this)
        this.state = {
            currentPrice: null,
            attributes: {}
        }
    }

    componentDidMount() {
        this.selectAttributeHandler()
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
        console.log(this.state.attributes)
        // this.props.addProductToCart(this.props.currentProduct, this.state.attributes)
    }

    selectAttributeHandler() {
        this.props.product.attributes.map(attribute => {
                this.setState({
                    attributes: {...this.state.attributes, [attribute.name]: attribute.items[0].value}
                })
            }
        )
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
    connect(mapStateToProps, {setCurrentProduct, addProductToCart})
)(ProductCardContainer)
