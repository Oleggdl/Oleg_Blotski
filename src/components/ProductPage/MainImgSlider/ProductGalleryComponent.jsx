import React, {Component} from 'react'
import './ProductGallery.scss'

class ProductGalleryComponent extends Component {


    render() {

        return (
            <>
                <div className="project-gallery-container">
                    <div className="product-gallery">
                        {this.props.currentProduct.gallery && this.props.currentProduct.gallery.map((img, index) =>
                            <div key={index} onClick={() => this.props.sliderHandler(index)}>
                                <img src={img} alt="product"/>
                            </div>)}
                    </div>
                    <div className="product-main-image">
                        {!this.props.currentProduct.inStock && <div className="is-in-stock-PDP">Out of stock</div>}
                        {this.props.currentProduct.gallery && this.props.currentProduct.gallery.map((img, index) =>
                            <div className={this.props.slideIndex === index + 1 ? 'main-img currentSlide' : 'main-img'}
                                 key={index}>
                                <img src={img} alt="product"
                                     style={!this.props.currentProduct.inStock ? {opacity: '0.6'} : null}
                                />
                            </div>)}
                    </div>
                </div>
            </>
        )
    }
}

export default ProductGalleryComponent
