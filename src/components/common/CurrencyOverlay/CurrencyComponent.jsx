import React, {Component} from 'react'
import './Currency.scss'

class CurrencyComponent extends Component {

    render() {

        const {currentCurrencyHandler, currencyRef, currencies} = this.props

        return (
            <>
                <aside className="currencies-container" ref={currencyRef}>
                    {currencies && currencies.map((currency, index) =>
                        <div key={index} onClick={() => currentCurrencyHandler(currency)}>
                            <span>{currency.symbol}</span>{currency.label}
                        </div>)}
                </aside>
            </>
        )
    }
}

export default CurrencyComponent
