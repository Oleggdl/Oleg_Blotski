import React, {Component} from 'react'
import ProductPageComponent from "./ProductPageComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {addProductToCart} from "../../redux/cart-reducer"

class ProductPageContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null,
            attributes: {},
            isAllAttributesFill: false
        }
        this.addToCartHandler = this.addToCartHandler.bind(this)
        this.selectAttributeHandler = this.selectAttributeHandler.bind(this)
    }

    componentDidMount() {
        for (let price of this.props.currentProduct?.prices) {
            if (price.currency.label === this.props.currentCurrency.label) {
                this.setState({
                    currentPrice: price.amount
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.attributes !== prevState.attributes) {
            let numberOfSelected = 0
            for (let key in this.state.attributes) {
                if (!!this.state.attributes[key]) {
                    numberOfSelected++
                }
            }
            if (numberOfSelected === this.props.currentProduct.attributes.length) {
                this.setState({
                    isAllAttributesFill: true
                })
            } else {
                this.setState({
                    isAllAttributesFill: false
                })
            }
        }

        if (this.props.currentProduct !== prevProps.currentProduct
            || this.props.currentCurrency !== prevProps.currentCurrency) {
            for (let price of this.props.currentProduct?.prices) {
                if (price.currency.label === this.props.currentCurrency.label) {
                    this.setState({
                        currentPrice: price.amount
                    })
                }
            }
        }
    }

    addToCartHandler() {
        this.props.addProductToCart(this.props.currentProduct, this.state.attributes, true)
    }

    selectAttributeHandler(id, value) {
        this.setState({
            attributes: {...this.state.attributes, [id]: value}
        })
    }

    render() {
        return (
            <>
                <ProductPageComponent currentProduct={this.props.currentProduct} currentPrice={this.state.currentPrice}
                                      currentCurrency={this.props.currentCurrency} attributes={this.state.attributes}
                                      addToCartHandler={this.addToCartHandler} cart={this.props.cart}
                                      selectAttributeHandler={this.selectAttributeHandler}
                                      isAllAttributesFill={this.state.isAllAttributesFill}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentProduct: state.productReducer.currentProduct,
    currentCurrency: state.navbarReducer.currentCurrency,
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {addProductToCart})
)(ProductPageContainer)
