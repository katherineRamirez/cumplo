import React, { Component } from 'react'; 
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import './Dolar.css';

class InputDolar extends React.Component{
	render(){
		return(
			<Grid>
          <Row className="grid">
            <Col xs={6} md={6}>
              <label>
                Fecha inicial:
              </label>
                <p><input id="dolarInicial" type="text" placeholder="Ej. 01-2010"  /></p>              
              	<p><input type="submit" value="Buscar" /></p>
            </Col>
            <Col xs={6} md={6}>
              <label>
                Fecha final:
              </label>
                <p><input id="dolarFinal" type="text" placeholder="Ej. 01-2010"  /></p>              
              	<p><input type="submit" value="Buscar" /></p>
            </Col>
          </Row>
        </Grid>
			)
	}
}

export default InputDolar;