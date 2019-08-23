//librerias
import { connect } from 'react-redux';
//actions
import seleccion_orden from '../actions/seleccion_orden';
import cargando_orden from '../actions/cargando_orden';
//componente
import TablaOrdenes from '../components/Body/TablaOrdenes';
import mostrarModal from '../actions/mostrar_modal_autorizacion';

//funciones  states
const mapStateProps=state=>({
    ordenes:state.ordenes,
    filtro:state.filtrado_tabla,
  });

const mapDispatchToProps = dispatch =>({
        seleccionOrden(orden){
            dispatch(seleccion_orden(orden))
        },
        cargandoOrden(estatus){
            dispatch(cargando_orden(estatus))
        },
        evMostrarModal(){
          dispatch(mostrarModal(true))
        }
  });

  
export default connect(mapStateProps,mapDispatchToProps)(TablaOrdenes);