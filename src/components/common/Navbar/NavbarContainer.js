import React, {Component} from 'react'
import NavbarComponent from "./NavbarComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {getProducts} from "../../../redux/product-reducer"
import {getCategories} from "../../../redux/category-reducer"
import {setIsCartOverlay} from "../../../redux/navbar-reducer";

class NavbarContainer extends Component {

    constructor(props) {
        super(props)
        this.onCartOverlayHandler = this.onCartOverlayHandler.bind(this)
    }

    setIsActive() {
        this.setState({
            isActive: true
        })
    }

    componentDidMount() {
        this.props.getCategories()
    }

    setCategory = (value) => {
        this.props.getProducts(value)
    }

    onCartOverlayHandler() {
        this.props.isCartOverlay ? this.props.setIsCartOverlay(false) : this.props.setIsCartOverlay(true)
    }


    render() {
        return (
            <>
                <NavbarComponent categories={this.props.categories} setCategory={this.setCategory}
                                 state={this.state} onCartOverlayHandler={this.onCartOverlayHandler}
                                 isCartOverlay={this.props.isCartOverlay}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories,
    isCartOverlay: state.navbarReducer.isCartOverlay,
})

export default compose(
    connect(mapStateToProps, {getCategories, getProducts, setIsCartOverlay})
)(NavbarContainer)
