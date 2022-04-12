import React, {Component} from 'react'
import ProductGalleryComponent from "./ProductGalleryComponent"

class ProductGalleryContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 1
        }
        this.sliderHandler = this.sliderHandler.bind(this)
    }

    sliderHandler(index) {

        this.setState({slideIndex: index + 1})

    }

    render() {
        return (
            <>
                <ProductGalleryComponent currentProduct={this.props.currentProduct} slideIndex={this.state.slideIndex}
                                         sliderHandler={this.sliderHandler}
                />
            </>
        )
    }
}

export default ProductGalleryContainer
