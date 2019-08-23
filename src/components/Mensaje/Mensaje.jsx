//librerias
import React from 'react';
import { connect } from 'react-redux';
//componentes
import Cargando from '../Cargando';

const Mensaje =({cargando})=>cargando?<Cargando />
:<div className="card bg-warning p-4">
    <h3 className="text-light">Sin Datos</h3>
</div>

//funciones map
const mapStateProps=state=>({
    cargando:state.cargando_tabla
  });

  export default connect(mapStateProps,{})(Mensaje);