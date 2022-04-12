import React, {Component} from 'react'
import './ProductGallery.scss'

class ProductGalleryComponent extends Component {


    render() {

        return (
            <>
                <div className="product-gallery">
                    {this.props.currentProduct.gallery && this.props.currentProduct.gallery.map((img, index) =>
                        <div key={index} onClick={() => this.props.sliderHandler(index)}>
                            <img src={img} alt="product image"/>
                        </div>)}
                </div>
                <div className="product-main-image">
                    {this.props.currentProduct.gallery && this.props.currentProduct.gallery.map((img, index) =>
                        <div className={this.props.slideIndex === index + 1 ? "main-img currentSlide" : "main-img"}
                             key={index}>
                            <img src={img} alt="product image"/>
                        </div>)}
                </div>
            </>
        )
    }
}

export default ProductGalleryComponent
