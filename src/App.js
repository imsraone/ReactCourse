import React from 'react';
import './App.css';
import Demo from './demo'
import ProductList from './Containers/ProductList';
import Currency from './Components/Currency';
import { environment } from './Config/env.dev';
import Checkout from './Components/Checkout'

class App extends React.Component {
  state = {
    curretnCurrency: environment.CURRENCY
  }
  UpdateCurrency(code) {
    this.setState({ curretnCurrency: code });
  }
  render() {
    return (
      <div className="App" >
        {/* <Demo></Demo> */}
        {<Checkout />}
        < Currency changeCurrency={(code) => this.UpdateCurrency(code)} />
        <ProductList curCode={this.state.curretnCurrency} />
      </div>
    );
  }
}

export default App;
