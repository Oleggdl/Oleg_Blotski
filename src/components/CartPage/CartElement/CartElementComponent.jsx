import React, {Component} from 'react'
import './CartElement.scss'
import SvgSelector from "../../common/SvgSelector"
import SliderContainer from "../../common/Slider/SliderContainer"

class CartElementComponent extends Component {

    render() {
        const {
            product, currentCurrency, currentPrice, decreaseAmount, deleteProductHandler, increaseAmount,
            productAmount
        } = this.props

        return (
            <>
                <div className="cart-element-container">
                    <div className="cart-element-info">
                        <h3>{product.brand}</h3>
                        <p className="cart-element-name">{product.name}</p>
                        <p className="cart-element-price">{currentCurrency.symbol}{currentPrice}</p>
                        <div className="cart-element-info-attributes">
                            {product.selectedAttributes
                                && Object.values(product.selectedAttributes).map((attribute, index) =>
                                    <div style={attribute.includes('#')
                                        ? {backgroundColor: `${attribute}`} : null} key={index}>
                                        {attribute.includes('#') ? null : attribute}</div>)}
                        </div>
                    </div>
                    <div className="cart-element-amount">
                        <div onClick={increaseAmount}><SvgSelector svgName="plus-square-icon"/></div>
                        <div className="cart-product-amount">{productAmount[product.id]}</div>
                        <div onClick={decreaseAmount}><SvgSelector svgName="minus-square-icon"/></div>
                    </div>
                    <SliderContainer product={product} deleteProductHandler={deleteProductHandler}/>
                </div>
            </>
        )
    }
}

export default CartElementComponent
