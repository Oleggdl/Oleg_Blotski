import React, {Component} from 'react'
import CurrencyComponent from "./CurrencyComponent"
import {compose} from "redux"
import {connect} from "react-redux"
import {setCurrentCurrency, setIsCurrencyMenu} from "../../../redux/navbar-reducer"

class CurrencyContainer extends Component {

    constructor(props) {
        super(props)
        this.currentCurrencyHandler = this.currentCurrencyHandler.bind(this)
        this.openCloseCurrencyOverlay = this.openCloseCurrencyOverlay.bind(this)
    }

    openCloseCurrencyOverlay(e) {
        if (this.props.currencyRef.current) {
            if (!this.props.currencyRef.current.contains(e.target)
                && !this.props.currencyBtnRef.current.contains(e.target)) {
                this.props.setIsCurrencyMenu(false)
            }
        }
    }

    componentDidMount() {
        if (this.props.currencyRef) {
            window.addEventListener('mousedown', this.openCloseCurrencyOverlay)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.openCloseCurrencyOverlay)
    }

    currentCurrencyHandler(currentCurrency) {
        this.props.setCurrentCurrency(currentCurrency)
        this.props.isCurrencyMenu ? this.props.setIsCurrencyMenu(false) : this.props.setIsCurrencyMenu(true)
    }

    render() {
        return (
            <>
                <CurrencyComponent currencyRef={this.props.currencyRef} currencies={this.props.currencies}
                                   currentCurrencyHandler={this.currentCurrencyHandler}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isCurrencyMenu: state.navbarReducer.isCurrencyMenu,
    currencies: state.navbarReducer.currencies,
})

export default compose(
    connect(mapStateToProps, {setIsCurrencyMenu, setCurrentCurrency})
)(CurrencyContainer)
