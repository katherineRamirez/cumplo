import React, { Component } from 'react'; 
import { Table } from 'react-bootstrap';
import './Dolar.css';

const Dato = ( props ) =>(
	<Table striped bordered condensed hover className="table">
		<thead>
	    <tr>
	      <th><strong>Valor</strong></th>
	      <th><strong>Fecha</strong></th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>{props.Valor}</td>
	      <td>{props.Fecha}</td>
	    </tr>
    </tbody>
	</Table>
)

class DolarExt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    dolarExt:[]
    }
  }
	componentWillMount(){
    fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar/2010/01?apikey=1cf99506c7710442f9f3c30e6143653d053f7d9e&formato=json&callback=despliegue')
      .then(response => response.json())
      .then(dolarExt =>{
          dolarExt.Dolares.forEach(resp => {
          let dato = {
            Valor:resp.Valor,
            Fecha:resp.Fecha
          }          
          this.setState({ dolarExt:this.state.dolarExt.concat([dato]) }) 
        })
    })

  }

    render(){        
     
    		if( this.state.dolarExt.length > 0 ){
      return(
        <div id="dolar">
          { this.state.dolarExt.map(resp => <Dato Valor={resp.Valor} Fecha={resp.Fecha}/>) }
        </div>
      )  
    }
    	return(
      	<p>Cargando datos...</p>
    	)
  }

 }

 export default DolarExt;