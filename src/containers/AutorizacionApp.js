//libreria
import { connect } from 'react-redux';
import Autorizacion from '../components/Autorizar';
import mostrarModal from '../actions/mostrar_modal_autorizacion';
import seleccion_orden from '../actions/seleccion_orden';

//funciones states
const mapStateProps=state=>({
    vista:state.vista_modal_autorizacion,
    orden:state.orden
 });

const mapDispatchToProps = dispatch =>({
     evCerrarModal(estatus){
        dispatch(mostrarModal(estatus))
    },
    evLimpiarStore(){
       dispatch(mostrarModal(false));
       dispatch(seleccion_orden({}));
    }
 });

export default connect(mapStateProps,mapDispatchToProps)(Autorizacion);
