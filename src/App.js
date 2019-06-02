import React from 'react';
import './App.css';
import Currency from './Components/Currency';
import { environment } from './Config/env.dev';
import AppRouter from './routes';
import Header from './ui/components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  state = {
    curretnCurrency: environment.CURRENCY
  }
  UpdateCurrency(code) {
    this.setState({ curretnCurrency: code });
  }
  render() {
    return (
      <Router className="App">
        <Header>
          <Currency changeCurrency={(code) => this.UpdateCurrency(code)} />
        </Header>
        <div className="mainContent">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
