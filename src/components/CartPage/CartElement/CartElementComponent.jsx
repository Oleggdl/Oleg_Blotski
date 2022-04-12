import React, {Component} from 'react'
import './CartElement.scss'
import SvgSelector from "../../common/SvgSelector"
import SliderContainer from "../../common/Slider/SliderContainer";

class CartElementComponent extends Component {

    render() {
        return (
            <>
                <div className="cart-element-container">
                    <div className="cart-element-info">
                        <h3>{this.props.product.brand}</h3>
                        <p className="cart-element-name">{this.props.product.name}</p>
                        <p className="cart-element-price">
                            {this.props.currentCurrency.symbol}{this.props.currentPrice}</p>
                        <div className="cart-element-info-attributes">
                            <div>S</div>
                            <div>M</div>
                        </div>
                    </div>
                    <div className="cart-element-amount">
                        <div onClick={this.props.increaseAmount}><SvgSelector svgName="plus-square-icon"/></div>
                        <div className="cart-product-amount">{this.props.productAmount}</div>
                        <div onClick={this.props.decreaseAmount}><SvgSelector svgName="minus-square-icon"/></div>
                    </div>

                    <SliderContainer product={this.props.product}/>
                    {/*<div className="cart-element-slider">*/}
                    {/*    <div className="left-arrow-icon" onClick={this.props.previousSlideHandler}>*/}
                    {/*        <SvgSelector svgName="left-arrow-icon"/></div>*/}
                    {/*    {this.props.product.gallery.map((img, index) =>*/}
                    {/*        <div key={index} className="cart-element-slide"><img src={img} alt="product image"/></div>)}*/}

                    {/*    <div className="right-arrow-icon" onClick={this.props.nextSlideHandler}>*/}
                    {/*        <SvgSelector svgName="right-arrow-icon"/></div>*/}
                    {/*</div>*/}
                </div>
            </>
        )
    }
}

export default CartElementComponent
