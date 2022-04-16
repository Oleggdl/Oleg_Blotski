import React, {Component} from 'react'
import './Slider.scss'
import SvgSelector from "../SvgSelector"

class SliderComponent extends Component {


    render() {
        return (
            <>
                <div className="cart-element-slider">
                    <div className="delete-product-btn" onClick={this.props.deleteProductHandler}>
                        <SvgSelector svgName="delete-product-svg"/>
                    </div>
                    <div className="left-arrow-icon" onClick={this.props.previousSlideHandler}>
                        <SvgSelector svgName="left-arrow-icon"/></div>
                    {this.props.product.gallery.map((img, index) =>
                        <div className={this.props.slideIndex === index + 1 ? "slide currentSlide" : "slide"}
                             key={index}><img src={img} alt="product image"/></div>)}
                    <div className="right-arrow-icon" onClick={this.props.nextSlideHandler}>
                        <SvgSelector svgName="right-arrow-icon"/></div>
                </div>
            </>
        )
    }
}

export default SliderComponent
