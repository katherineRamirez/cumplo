import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Uf from './components/Uf/Uf';
import Dolar from './components/Dolar/Dolar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Header></Header>
          <h2>UF 2018</h2>
        <Uf id="uf"></Uf>
          <h2>DOLAR</h2>
        <Dolar id="dolar"></Dolar>
      </div>
    );
  }
}

export default App;
