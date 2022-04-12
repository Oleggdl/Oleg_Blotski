import React, {Component} from 'react'
import './ProductAttributes.scss'

class ProductAttributesComponent extends Component {

    render() {
        return (
            <>
                <h3>{this.props.attribute.name}:</h3>
                <div className="product-page-attributes">
                    {this.props.attribute.items.map((item, index) => {

                            const isActiveSwatchItem = this.props.attribute.type === 'swatch'
                                ? 'attribute-swatch-active' : 'attribute-active'
                            const isActiveItem = this.props.attributes[this.props.attribute.name] === item.value
                                ? isActiveSwatchItem : ''

                            return <div
                                onClick={() => this.props.selectAttributeHandler(this.props.attribute.name, item.value)}
                                className={this.props.attribute.name in this.props.attributes ? isActiveItem : null}
                                style={this.props.attribute.type === 'swatch'
                                    ? {backgroundColor: `${item.value}`}
                                    : null}
                                key={index}>{this.props.attribute.type === 'swatch' ? null : item.displayValue}
                            </div>
                        }
                    )}
                </div>
            </>
        )
    }
}

export default ProductAttributesComponent
