import React, { Component } from 'react'; 
import './Uf.css';

const Data = ( props ) =>(
	<li>
		<h3>{props.Valor}</h3>
		<h5>{props.Fecha}</h5>
	</li>
)

class Uf extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ufs:[]
    }
  }
  componentWillMount(){
    fetch('https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=1cf99506c7710442f9f3c30e6143653d053f7d9e&formato=json&callback=despliegue')
      .then(response => response.json())
      .then(ufs =>{
      
        ufs.UFs.forEach(resp => {
          let data = {
            Valor:resp.Valor,
            Fecha:resp.Fecha
          }          
          this.setState({ ufs:this.state.ufs.concat([data]) }) 
        })
    })

  }
  render(){
    if( this.state.ufs.length > 0 ){
      return(
        <div>
          { this.state.ufs.map(resp => <Data Valor={resp.Valor} Fecha={resp.Fecha}/>) }
        </div>
      )
  
    }
    return(
      <p>Cargando datos...</p>
    )
  }
}
	
export default Uf;