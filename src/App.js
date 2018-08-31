import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Uf from './components/Uf/Uf';
import Dolar from './components/Dolar/Dolar';
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
        <Uf id="uf"></Uf>
        <Grid>
          <Row className="grid">
            <Col xs={6} md={6}>
              <label>
                Fecha inicial:
                <input type="text" ref={this.input} />
                <input type="submit" value="Buscar" />
              </label>
            </Col>
            <Col xs={6} md={6}>
              <label>
                Fecha final:
                <input type="text" ref={this.input} />
                <input type="submit" value="Buscar" />
              </label>
            </Col>
          </Row>
        </Grid>
         <UfExt></UfExt>
          <h2>DOLAR</h2>
        <Dolar id="dolar"></Dolar>
        <Grid>
          <Row className="grid">
            <Col xs={6} md={6}>
              <label>
                Fecha inicial:
                <input type="text" ref={this.input} />
                <input type="submit" value="Buscar" />
              </label>
            </Col>
            <Col xs={6} md={6}>
              <label>
                Fecha final:
                <input type="text" ref={this.input} />
                <input type="submit" value="Buscar" />
              </label>
            </Col>
          </Row>
        </Grid>
          <DolarExt></DolarExt>
      </div>
    );
  }
}

export default App;
