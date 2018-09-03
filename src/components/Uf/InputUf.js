import React, { Component } from 'react'; 
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import './Uf.css';


class InputUf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }



  initialDateUf = () => {
    this.setState(state => ({ value: state.value }));
  };

  finalDateUf = () => {
    this.setState(state => ({ value: state.value }));
  };

  render() {
    return (
      <Grid>
          <Row className="grid">
            <Col xs={6} md={6}>
              <label>
                Fecha inicial:
              </label>
                <p><input id="ufInicial" type="text" placeholder="Ej. 01-2010" ref={this.value} /></p>
                <p><input type="submit" onClick={this.initialDateUf} value="Buscar" /></p>
            </Col>
            <Col xs={6} md={6}>
              <label>
                Fecha final:
              </label>
                <p><input id="ufFinal" type="text" placeholder="Ej. 01-2010" ref={this.value} /></p>              
                <p><input type="submit" onClick={this.finalDateUf} value="Buscar" /></p>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default InputUf;