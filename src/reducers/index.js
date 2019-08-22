import { combineReducers } from 'redux';
//reducers
import ordenes from './FiltroOrdenDeGasto';
import filtro from './EstatusOrdenDeGasto';
import orden from './OrdenGasto';

const reducers = combineReducers({
    ordenes,
    filtro,
    orden
});

export default reducers;