//librerias
import { connect } from 'react-redux';
import TablaProductos from '../components/Autorizar/TablaProductos';

//funciones  states
const mapStateProps=state=>({
    productos:state.orden.productos,
    filtro:state.filtrado_tabla,
  });

const mapDispatchToProps = dispatch =>({
  });

export default connect(mapStateProps,mapDispatchToProps)(TablaProductos);