//librerias
import { connect } from 'react-redux';
//actions

//componente
import CuerpoApp from '../components/Body';

//funciones  states
const mapStateProps=state=>({
    cargando:state.cargando_orden
  });

const mapDispatchToProps = dispatch =>({

  });

  
export default connect(mapStateProps,mapDispatchToProps)(CuerpoApp);