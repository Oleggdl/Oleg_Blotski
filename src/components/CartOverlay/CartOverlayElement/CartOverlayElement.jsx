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
                        <p>{this.props.currentCurrency.symbol}{this.props.currentPrice}</p>

                        <div className="cart-overlay-element-attributes">
                            {this.props.product.selectedAttributes
                                && Object.values(this.props.product.selectedAttributes).map((attribute, index) =>
                                    <div style={attribute.includes('#')
                                        ? {backgroundColor: `${attribute}`}
                                        : null} key={index}>{attribute.includes('#') ? null : attribute}</div>)}
                        </div>
                    </div>
                    <div className="cart-overlay-amount">
                        <div onClick={this.props.increaseAmount}><SvgSelector svgName="plus-square-icon"/></div>
                        <div className="product-amount">{this.props.productAmount[this.props.product.id]}</div>
                        <div onClick={this.props.decreaseAmount}><SvgSelector svgName="minus-square-icon"/></div>
                    </div>
                    <div className="cart-overlay-element-image">
                        <img src={this.props.product.gallery[0]} alt="product image"/>
                    </div>
                    <div className="delete-product-btn" onClick={this.props.deleteProductHandler}>
                        <SvgSelector svgName="delete-product-svg"/>
                    </div>
                </div>
            </>
        )
    }
}

export default CartOverlayElement
