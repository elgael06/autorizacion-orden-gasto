//libreria
import { connect } from 'react-redux';
import Autorizacion from '../components/Autorizar';
import mostrarModal from '../actions/mostrar_modal_autorizacion';

//funciones states
const mapStateProps=state=>({
    vista:state.vista_modal_autorizacion
 });

const mapDispatchToProps = dispatch =>({
     evMostrarModal(estatus){
        dispatch(mostrarModal(estatus))
    },
 });

export default connect(mapStateProps,mapDispatchToProps)(Autorizacion);
