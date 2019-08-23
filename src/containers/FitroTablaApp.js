//librerias
import { connect } from 'react-redux';
//componentes
import FitroTabla from '../components/Filtrado';
//actions
import filtrado_tabla from '../actions/filtrado_tabla';

//funciones states
const mapStateProps=state=>({
    filtro:state.filtrado_tabla,
    cargando:state.cargando_orden
  });

const mapDispatchToProps = dispatch =>({
        onFiltro(filtro){
            dispatch(filtrado_tabla(filtro));
        }
  });

export default connect(mapStateProps,mapDispatchToProps)(FitroTabla);