import React, {Component} from 'react'
import SvgSelector from "../../common/SvgSelector"
import './CartOverlayElement.scss'

class CartOverlayElement extends Component {

    render() {

        const {
            currentCurrency, currentPrice, decreaseAmount, deleteProductHandler, increaseAmount, product,
            productAmount
        } = this.props

        return (
            <>
                <div className="cart-overlay-element-container">
                    <div className="cart-overlay-info">
                        <h4>{product.name}</h4>
                        <p>{currentCurrency.symbol}{currentPrice}</p>
                        <div className="cart-overlay-element-attributes">
                            {product.selectedAttributes
                                && Object.values(product.selectedAttributes).map((attribute, index) =>
                                    <div style={attribute.includes('#')
                                        ? {backgroundColor: `${attribute}`}
                                        : null} key={index}>{attribute.includes('#') ? null : attribute}</div>)}
                        </div>
                    </div>
                    <div className="cart-overlay-amount">
                        <div onClick={increaseAmount}><SvgSelector svgName="plus-square-icon"/></div>
                        <div className="product-amount">{productAmount[product.id]}</div>
                        <div onClick={decreaseAmount}><SvgSelector svgName="minus-square-icon"/></div>
                    </div>
                    <div className="cart-overlay-element-image">
                        <img src={product.gallery[0]} alt="product image"/>
                    </div>
                    <div className="delete-product-btn" onClick={deleteProductHandler}>
                        <SvgSelector svgName="delete-product-svg"/>
                    </div>
                </div>
            </>
        )
    }
}

export default CartOverlayElement
