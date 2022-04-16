import React, {Component} from 'react'
import SliderComponent from "./SliderComponent"

class SliderContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 1
        }
        this.previousSlideHandler = this.previousSlideHandler.bind(this)
        this.nextSlideHandler = this.nextSlideHandler.bind(this)
    }

    nextSlideHandler() {
        if (this.state.slideIndex !== this.props.product.gallery.length) {
            this.setState({slideIndex: this.state.slideIndex + 1})
        } else if (this.state.slideIndex === this.props.product.gallery.length) {
            this.setState({slideIndex: 1})
        }
    }

    previousSlideHandler() {
        if (this.state.slideIndex !== 1) {
            this.setState({slideIndex: this.state.slideIndex - 1})
        } else if (this.state.slideIndex === 1) {
            this.setState({slideIndex: this.props.product.gallery.length})
        }
    }

    render() {
        return (
            <>
                <SliderComponent product={this.props.product} previousSlideHandler={this.previousSlideHandler}
                                 nextSlideHandler={this.nextSlideHandler} slideIndex={this.state.slideIndex}
                                 deleteProductHandler={this.props.deleteProductHandler}/>
            </>
        )
    }
}

export default SliderContainer

