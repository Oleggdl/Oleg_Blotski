import React, {Component} from 'react'
import './CartElement.scss'
import SvgSelector from "../../common/SvgSelector"

class CartElementComponent extends Component {

    render() {
        console.log(this.props.product)
        return (
            <>
                <div className="cart-element-container">
                    <div className="cart-element-info">
                        <h3>{this.props.product.brand}</h3>
                        <p className="cart-element-name">{this.props.product.name}</p>
                        <p className="cart-element-price">$50.00</p>
                        <div className="cart-element-info-attributes">
                            <div>S</div>
                            <div>M</div>
                        </div>
                    </div>
                    <div className="cart-element-amount">
                        <SvgSelector svgName="plus-square-icon"/>
                        <div>1</div>
                        <SvgSelector svgName="minus-square-icon"/>
                    </div>
                    <div className="cart-element-slider">
                        <img src={this.props.product.gallery[0]} alt="product image"/>
                    </div>
                </div>
            </>
        )
    }
}

export default CartElementComponent
