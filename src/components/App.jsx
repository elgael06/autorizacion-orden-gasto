//librerias
import React,{Fragment} from 'react';
import { connect } from 'react-redux';
//estylos
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import './App.css'
//actions

//componentes
import Cavecera from './header';
import CuerpoApp from './Body';
import FitroTabla from './Filtrado';
import Mensaje from './Mensaje';


function App({status_ordenes}) {
  return (
    <div className="container bg-light  border-1 App">
      <Cavecera />
      {status_ordenes ?
      <Fragment>
          <FitroTabla/>
          <CuerpoApp />
        </Fragment>
        :<Mensaje />
      }
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
