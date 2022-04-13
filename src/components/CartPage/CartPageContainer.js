import React, {Component} from 'react'
import CartPageComponent from "./CartPageComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setCurrentCategory} from "../../redux/category-reducer"

class CartPageContainer extends Component {

    componentDidMount() {
        this.props.setCurrentCategory(null)
    }

    render() {
        return (
            <>
                <CartPageComponent cart={this.props.cart}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer.cart
})

export default compose(
    connect(mapStateToProps, {setCurrentCategory})
)(CartPageContainer)
