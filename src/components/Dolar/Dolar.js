import React, { Component } from 'react'; 
import './Dolar.css';

const Dato = ( props ) =>(
  <li>
    <h3>{props.Valor}</h3>
    <h5>{props.Fecha}</h5>
  </li>
)

class Dolar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dolares:[]
    }
  }
  componentWillMount(){
    fetch('https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=1cf99506c7710442f9f3c30e6143653d053f7d9e&formato=json&callback=despliegue')
      .then(response => response.json())
      .then(dolares =>{
      
        dolares.Dolares.forEach(resp => {
          let data = {
            Valor:resp.Valor,
            Fecha:resp.Fecha
          }          
          console.log( data )
          this.setState({ dolares:this.state.dolares.concat([data]) }) 
        })
    })

  }
  render(){
    console.log( this.state.dolares.length )
    if( this.state.dolares.length > 0 ){
      return(
        <div>
          { this.state.dolares.map(resp => <Dato Valor={resp.Valor} Fecha={resp.Fecha}/>) }
        </div>
      )
  
    }
    return(
      <p>Cargando datos...</p>
    )
  }
}


export default Dolar;