import React, {Component} from 'react'
import ProductAttributesComponent from "./ProductAttributesComponent"

class ProductAttributesContainer extends Component {


    render() {
        return (
            <>
                <ProductAttributesComponent attribute={this.props.attribute} attributes={this.props.attributes}
                                            selectAttributeHandler={this.props.selectAttributeHandler}/>
            </>
        )
    }
}

export default ProductAttributesContainer
