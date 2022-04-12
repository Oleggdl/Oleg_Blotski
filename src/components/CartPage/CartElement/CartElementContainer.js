import React, {Component} from 'react'
import CartElementComponent from "./CartElementComponent"
import {compose} from "redux"
import {connect} from "react-redux"

class CartElementContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPrice: null,
            productAmount: 1
        }
        this.increaseAmount = this.increaseAmount.bind(this)
        this.decreaseAmount = this.decreaseAmount.bind(this)
    }

    componentDidMount() {
        for (let price of this.props.product?.prices) {
            if (price.currency.label === this.props.currentCurrency.label) {

                this.setState({
                    currentPrice: price.amount
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.product !== prevProps.product
            || this.props.currentCurrency !== prevProps.currentCurrency) {
            for (let price of this.props.product?.prices) {
                if (price.currency.label === this.props.currentCurrency.label) {
                    this.setState({
                        currentPrice: price.amount
                    })
                }
            }
        }
    }

    increaseAmount() {
        console.log('test')
        if (this.state.productAmount <= 9) {
            this.setState({
                productAmount: this.state.productAmount + 1
            })
        }
    }

    decreaseAmount() {
        if (this.state.productAmount >= 2) {
            this.setState({
                productAmount: this.state.productAmount - 1
            })
        }
    }



    render() {
        return (
            <>
                <CartElementComponent product={this.props.product} currentCurrency={this.props.currentCurrency}
                                      currentPrice={this.state.currentPrice}
                                      productAmount={this.state.productAmount}
                                      increaseAmount={this.increaseAmount}
                                      decreaseAmount={this.decreaseAmount}

                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentCurrency: state.navbarReducer.currentCurrency
})

export default compose(
    connect(mapStateToProps, {})
)(CartElementContainer)
