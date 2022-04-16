import React, {Component} from 'react'
import './ProductGallery.scss'

class ProductGalleryComponent extends Component {

    render() {

        const {currentProduct, slideIndex, sliderHandler} = this.props

        return (
            <>
                <div className="project-gallery-container">
                    <div className="product-gallery">
                        {currentProduct.gallery && currentProduct.gallery.map((img, index) =>
                            <div key={index} onClick={() => sliderHandler(index)}>
                                <img src={img} alt="product"/>
                            </div>)}
                    </div>
                    <div className="product-main-image">
                        {!currentProduct.inStock && <div className="is-in-stock-PDP">Out of stock</div>}
                        {currentProduct.gallery && currentProduct.gallery.map((img, index) =>
                            <div className={slideIndex === index + 1 ? 'main-img currentSlide' : 'main-img'}
                                 key={index}>
                                <img src={img} style={!currentProduct.inStock ? {opacity: '0.6'} : null}
                                     alt="product"/>
                            </div>)}
                    </div>
                </div>
            </>
        )
    }
}

export default ProductGalleryComponent
