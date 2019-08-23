//librerias
import { connect } from 'react-redux';
//actions
import seleccion_orden from '../actions/seleccion_orden';
import cargando_orden from '../actions/cargando_orden';
//componente
import TablaOrdenes from '../components/Body/TablaOrdenes';

//funciones  states
const mapStateProps=state=>({
    ordenes:state.ordenes,
    filtro:state.filtrado_tabla,
    orden:state.orden
  });

const mapDispatchToProps = dispatch =>({
        seleccionOrden(orden){
            dispatch(seleccion_orden(orden))
        },
        cargandoOrden(estatus){
            dispatch(cargando_orden(estatus))
        }
  });

  
export default connect(mapStateProps,mapDispatchToProps)(TablaOrdenes);