import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import ExchangeCurrency from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <ExchangeCurrency />
      </>
    );
  }
}

export default App;
