import React, {Component} from 'react'
import './ProductAttributes.scss'

class ProductAttributesComponent extends Component {

    render() {

        const {selectAttributeHandler, attribute, attributes} = this.props

        return (
            <>
                <h3>{attribute.name}:</h3>
                <div className="product-page-attributes">
                    {attribute.items.map((item, index) => {

                        const isActiveSwatchItem = attribute.type === 'swatch'
                            ? 'attribute-swatch-active' : 'attribute-active'
                        const isActiveItem = attributes[attribute.name] === item.value ? isActiveSwatchItem : ''

                        return <div onClick={() => selectAttributeHandler(attribute.name, item.value)}
                                    className={attribute.name in attributes ? isActiveItem : null}
                                    style={attribute.type === 'swatch' ? {backgroundColor: `${item.value}`} : null}
                                    key={index}>{attribute.type === 'swatch' ? null : item.displayValue}
                        </div>
                    })}
                </div>
            </>
        )
    }
}

export default ProductAttributesComponent
