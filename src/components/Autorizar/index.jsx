//librerias
import React from 'react';
//componentes
import ModalBase from '../ModalBase';
import BtnEstatusAut from './BtnEstatusAut';
import TablaProductos from '../../containers/ProductosApp';

const Autorizacion =({orden,vista,evMostrarModal})=>{
    //funciones
    const onCerrar =()=>{
        console.log("cerrar...");
        evMostrarModal(false);
    }
    return !vista || (<ModalBase titulo={"Autorizacion De Orden De Gasto"} onCerrar={onCerrar}>
        <BtnEstatusAut />
        <TablaProductos />
        <section className="float-right p-2">
            Importe Total :
          <b> <u>  $ {orden.importe_total}</u></b>
        </section>
    </ModalBase>);
} 

export default Autorizacion;