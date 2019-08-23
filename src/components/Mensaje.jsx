//librerias
import React from 'react';
import { connect } from 'react-redux';
import './mensaje.scss'

const Mensaje =({cargando})=>cargando?<div className="cargando-tabla">
        <i className="rotate  fa fa-circle-o-notch"></i>
        <b>cargando ...</b> 
</div>
:<div className="card bg-warning p-4">
    <h3 className="text-light">Sin Datos</h3>
</div>

//funciones map
const mapStateProps=state=>({
    cargando:state.cargando_tabla
  });

  export default connect(mapStateProps,{})(Mensaje);