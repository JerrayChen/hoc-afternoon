import React from 'react';

function CurrencyDisplay(props){
    const {currency, amount} = props;
    return (
        <div>
            <div>Currency: {currency}</div>
            <div>Amount: {amount}</div>
        </div>
    )
}

export default CurrencyDisplay;