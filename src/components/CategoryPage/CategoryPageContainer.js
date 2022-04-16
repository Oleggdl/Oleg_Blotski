import React, {Component} from 'react'
import CategoryPageComponent from "./CategoryPageComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {getProducts} from "../../redux/product-reducer"

class CategoryPageContainer extends Component {

    componentDidMount() {
        this.props.currentCategory && this.props.getProducts(this.props.currentCategory)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentCategory !== prevProps.currentCategory) {
            this.props.currentCategory && this.props.getProducts(this.props.currentCategory)
        }
    }

    render() {
        return (
            <>
                <CategoryPageComponent products={this.props.products}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.productReducer.products,
    currentCategory: state.categoryReducer.currentCategory
})

export default compose(
    connect(mapStateToProps, {getProducts})
)(CategoryPageContainer)
