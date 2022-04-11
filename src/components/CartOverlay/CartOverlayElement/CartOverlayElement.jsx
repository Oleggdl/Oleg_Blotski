import React, {Component} from 'react'
import SvgSelector from "../../common/SvgSelector"
import './CartOverlayElement.scss'

class CartOverlayElement extends Component {


    render() {
        return (
            <>
                <div className="cart-overlay-element-container">
                    <div className="cart-overlay-info">
                        <h4>{this.props.product.name}</h4>
                        <p>$50.00</p>
                        <div className="cart-overlay-element-attributes">
                            <div>S</div>
                            <div>M</div>
                        </div>
                    </div>
                    <div className="cart-overlay-amount">
                        <SvgSelector svgName="plus-square-icon"/>
                        <div>1</div>
                        <SvgSelector svgName="minus-square-icon"/>
                    </div>
                    <div className="cart-overlay-element-image">
                        <img src={this.props.product.gallery[0]} alt="product image"/>
                    </div>
                </div>
            </>
        )
    }
}

export default CartOverlayElement
