//librerias
import React from 'react';
import { connect } from 'react-redux';
//estylos
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import './App.css'
//actions

//componentes
import Cavecera from '../containers/CaveceraApp';
import CuerpoApp from '../containers/CuerpoApp';
import Mensaje from './Mensaje/Mensaje';
import AutorizacionApp from '../containers/AutorizacionApp';


function App({status_ordenes}) {
  return (
    <div className="container bg-light  border-1 App">
      <Cavecera />
	  {status_ordenes ?<CuerpoApp />  : <Mensaje />}
	  <AutorizacionApp />
    </div>
  );
}

//funciones map
const mapStateProps=state=>({
  status_ordenes:state.ordenes.length>0 && !state.cargando_tabla,
  filtro:state.filtrado_tabla
});
const mapDispatchToProps = dispatch =>({
  
});

export default connect(mapStateProps,mapDispatchToProps)(App);
