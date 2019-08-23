import React from 'react';
import { connect } from 'react-redux';
import filtrado_tabla from '../../actions/filtrado_tabla';

const FitroTabla =({filtro,onFiltro})=>{

    return(<div>
        <input className="form-control"  placeholder="Filtro Ordenes de Compras ..." value={filtro}  onChange={e=>onFiltro(e.target.value)} />
    </div>)
}

//funciones map
const mapStateProps=state=>({
    filtro:state.filtrado_tabla
  });

const mapDispatchToProps = dispatch =>({
        onFiltro(filtro){
            dispatch(filtrado_tabla(filtro));
        }
  });

export default connect(mapStateProps,mapDispatchToProps)(FitroTabla);