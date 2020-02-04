import React from 'react';
import CurrencyDisplay from './CurrencyDisplay';

function withCurrency(BaseComponent) {
    const currencyData = [
        { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
        { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
        { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
        { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
        { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
    ]

    return class Currency extends React.Component {
        constructor() {
            super();
            this.state = {
                currencyChosen: false,
                selectedCurrency: 'Select Currency',
                amount: 0
            }
        }

        handleAmountIncrease = () => {
            this.setState((prevState, prevProps) => {
                return {
                    amount: prevState.amount + 1
                }
            });
        }

        handleAmountDecrease = () => {
            this.setState((prevState, prevProps) => {
                return {
                    amount: prevState.amount - 1
                }
            });
        }

        handleOptionSelect = (e) => {
            const userValue = e.target.value
            this.setState({
                selectedCurrency: userValue,
                currencyChosen: userValue === 'Select Currency' ? false : true
            });
        }

        render() {
            return (
                <div>
                    <select onChange={this.handleOptionSelect}>
                        <option value='Select Currency'>Select Currency</option>
                        {currencyData.map(e => {
                            return (
                                <option key={e.id} value={e.name}>{e.name}</option>
                            )
                        })}
                    </select>
                    {/* {this.state.currencyChosen?'true':'false'} */}
                    <button onClick={this.handleAmountIncrease}>+</button>
                    <button onClick={this.handleAmountDecrease}>-</button>
                    {this.state.currencyChosen?<BaseComponent 
                        currency={this.state.selectedCurrency}
                        amount = {this.state.amount}
                    />:'Please Select Currency'}
                    
                </div>
            )
        }
    }
}

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;