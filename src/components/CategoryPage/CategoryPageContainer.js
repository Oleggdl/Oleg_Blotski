import React, {Component} from 'react'
import CategoryPageComponent from "./CategoryPageComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {getAllProducts, setCurrentProduct} from "../../redux/product-reducer"

class CategoryPageContainer extends Component {

    constructor(props) {
        super(props)
        this.cartWrapper = React.createRef()
    }


    componentDidMount() {
        this.props.getAllProducts()
        // this.cartWrapper.current.addEventListener('click', () => {
        //     console.log('test')
        // })
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <CategoryPageComponent products={this.props.products} cartWrapper={this.cartWrapper}
                                       isCartOverlay={this.props.isCartOverlay}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.productReducer.products,
    categories: state.categoryReducer.categories,
    isCartOverlay: state.navbarReducer.isCartOverlay
})

export default compose(
    connect(mapStateToProps, {getAllProducts})
)(CategoryPageContainer)
