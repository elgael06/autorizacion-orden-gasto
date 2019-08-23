//libreria
import { combineReducers } from 'redux';
//reducers
import ordenes from './FiltroOrdenDeGasto';
import filtro from './EstatusOrdenDeGasto';
import orden from './OrdenGasto';
import filtrado_tabla from './DetallesFiltradoTabla';
import cargando_tabla from './CargandoTabla';
import cargando_orden from './CargandoOrden';
import vista_modal_autorizacion from './VistaModalAutorizacion';

const reducers = combineReducers({
    ordenes,
    filtro,
    orden,
    filtrado_tabla,
    cargando_tabla,
    cargando_orden,
    vista_modal_autorizacion
});

export default reducers;