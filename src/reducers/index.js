import { combineReducers } from 'redux';
//reducers
import ordenes from './FiltroOrdenDeGasto';
import filtro from './EstatusOrdenDeGasto';
import orden from './OrdenGasto';
import filtrado_tabla from './DetallesFiltradoTabla';

const reducers = combineReducers({
    ordenes,
    filtro,
    orden,
    filtrado_tabla
});

export default reducers;