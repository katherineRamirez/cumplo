import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Uf from './components/Uf/Uf';
import InputUf from './components/Uf/InputUf';
import Dolar from './components/Dolar/Dolar';
import InputDolar from './components/Dolar/InputDolar';
import UfExt from './components/Uf/UfExt';
import DolarExt from './components/Dolar/DolarExt';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Header></Header>
          <h2>UF 2018</h2>
        <Uf></Uf>
        <InputUf></InputUf>
         <UfExt></UfExt>
          <h2>DOLAR</h2>
        <Dolar></Dolar>
        <InputDolar></InputDolar>
          <DolarExt></DolarExt>
      </div>
    );
  }
}

export default App;
