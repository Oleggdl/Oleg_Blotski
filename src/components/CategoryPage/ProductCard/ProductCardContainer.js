import React, {Component} from 'react'
import ProductCardComponent from "./ProductCardComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setAttributes, setCurrentProduct} from "../../../redux/product-reducer"
import {addProductToCart} from "../../../redux/cart-reducer"

class ProductCardContainer extends Component {

    constructor(props) {
        super(props)
        this.currentProductHandler = this.currentProductHandler.bind(this)
        this.addToCartHandler = this.addToCartHandler.bind(this)
        this.state = {
            currentPrice: null,
            attributes: []
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

        if (this.state.attributes !== prevState.attributes) {
            this.props.setAttributes(this.props.product.name, this.state.attributes)
        }
    }

    currentProductHandler() {
        this.props.setCurrentProduct(this.props.product)
        window.sessionStorage.setItem('currentProduct', JSON.stringify(this.props.product))
    }

    addToCartHandler() {
        this.props.product.inStock &&
        this.props.addProductToCart(this.props.product, this.props.attributes[this.props.product.name], true)
    }

    selectAttributeHandler() {
        this.props.product.attributes.map(attribute =>
            this.setState(prevState => ({
                attributes:
                    {...prevState.attributes, [attribute.id]: attribute.items[0].value}
            }))
        )
    }

    render() {
        return (
            <>
                <ProductCardComponent product={this.props.product} currentProductHandler={this.currentProductHandler}
                                      addToCartHandler={this.addToCartHandler} currentPrice={this.state.currentPrice}
                                      currentCurrency={this.props.currentCurrency} cart={this.props.cart}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCurrency: state.navbarReducer.currentCurrency,
    attributes: state.productReducer.attributes,
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {setCurrentProduct, addProductToCart, setAttributes})
)(ProductCardContainer)
