import React, { Component } from 'react'; 
import { Table } from 'react-bootstrap';
import './Uf.css';

const Data = ( props ) =>(
	<Table responsive striped bordered condensed hover className="table">
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

class UfExt extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef();
    this.state = {
    ufsExt:[]
    }
  }
	componentWillMount(){
    fetch('https://api.sbif.cl/api-sbifv3/recursos_api/uf/2010/01?apikey=1cf99506c7710442f9f3c30e6143653d053f7d9e&formato=json&callback=despliegue')
      .then(response => response.json())
      .then(ufsExt =>{
          ufsExt.UFs.forEach(resp => {
          let data = {
            Valor:resp.Valor,
            Fecha:resp.Fecha
          }          
          console.log( data )
          this.setState({ ufsExt:this.state.ufsExt.concat([data]) }) 
        })
    })

  }

    render(){        
      console.log( this.state.ufsExt.length )
    		if( this.state.ufsExt.length > 0 ){
      return(
        <div>
          { this.state.ufsExt.map(resp => <Data Valor={resp.Valor} Fecha={resp.Fecha}/>) }
        </div>
      )  
    }
    	return(
      	<p>Cargando datos...</p>
    	)
  }

 }

 export default UfExt;