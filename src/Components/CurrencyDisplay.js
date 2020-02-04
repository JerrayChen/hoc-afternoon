import React from 'react';

function CurrencyDisplay(props){
    const {currency, amount} = props;
    return (
        <div>
            <div>Currency: {currency.name}</div>
            <div>USD Amount: {amount.toFixed(2)}</div>
            <div>{currency.name} Amount: {currency.symbol}{(amount*currency.rate).toFixed(2)}</div>
        </div>
    )
}

export default CurrencyDisplay;