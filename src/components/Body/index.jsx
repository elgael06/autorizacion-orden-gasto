//librerias
import React,{Fragment} from 'react';
//estilos
import './body.scss'
//componentes
import Cargando from '../Cargando';
import TablaOrdenes from '../../containers/TablaOrdenesApp';
import FitroTabla from '../../containers/FitroTablaApp';

const CuerpoApp =({cargando})=>{

    return <Fragment>
    <FitroTabla />
        {cargando ? <Cargando /> : <TablaOrdenes />}
</Fragment>
}

export default CuerpoApp;