//libreria
import { connect } from 'react-redux';
//actions
import consultar_filtro from '../actions/consultar_filtro';
import cambio_filtro from '../actions/cambio_estatus';
import cargando_tabla from '../actions/cargando_tabla';
//componente
import Cavecera from '../components/header'
//funciones states
const mapStateProps=state=>({
    filtro:state.filtro,
    cargando:state.cargando_tabla
  });

const mapDispatchToProps = dispatch =>({
    cambioOrrdenes(ordenes){
      dispatch(consultar_filtro(ordenes));
      },
      evFiltro(filtro){
          dispatch(cambio_filtro(filtro))
      },
      evCargar(estado){
        dispatch(cargando_tabla(estado))
      }
  });

  export default connect(mapStateProps,mapDispatchToProps)(Cavecera);
