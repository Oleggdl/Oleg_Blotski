import React, {Component} from 'react'
import './Slider.scss'
import SvgSelector from "../SvgSelector"

class SliderComponent extends Component {


    render() {

        const {deleteProductHandler, product, nextSlideHandler, previousSlideHandler, slideIndex} = this.props

        return (
            <>
                <div className="cart-element-slider">
                    <div className="delete-product-btn" onClick={deleteProductHandler}>
                        <SvgSelector svgName="delete-product-svg"/>
                    </div>
                    <div className="left-arrow-icon" onClick={previousSlideHandler}>
                        <SvgSelector svgName="left-arrow-icon"/>
                    </div>
                    {product.gallery.map((img, index) =>
                        <div className={slideIndex === index + 1 ? "slide currentSlide" : "slide"}
                             key={index}>
                            <img src={img} alt="product"/>
                        </div>)}
                    <div className="right-arrow-icon" onClick={nextSlideHandler}>
                        <SvgSelector svgName="right-arrow-icon"/>
                    </div>
                </div>
            </>
        )
    }
}

export default SliderComponent
