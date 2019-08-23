// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from '../reducers';

const initialState = {
    ordenes:[],
    filtro:"Pendiente",
    orden:{},
    filtrado_tabla:"",
    cargando_tabla:false
};

const store = createStore(reducers,initialState);

export default store;