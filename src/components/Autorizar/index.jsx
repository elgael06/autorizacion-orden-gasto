//librerias
import React from 'react';
//componentes
import ModalBase from '../ModalBase';
import BtnEstatusAut from './BtnEstatusAut';
import TablaProductos from '../../containers/ProductosApp';
import DetallesOrden from './DetallesOrden';

const Autorizacion =({orden,vista,evCerrarModal,evLimpiarStore})=>{
    //funciones
    const onCerrar =()=>{
        console.log("cerrar...");
        evCerrarModal(false);
    }
    const onAutorizar=estatus=>{
        console.log("Autorizacion Orden =>",estatus);
        evLimpiarStore();
    }

    return !vista || (<ModalBase titulo={"Autorizacion De Orden De Gasto"} onCerrar={onCerrar}>
        <div style={{overflow:"auto",maxHeight:"130px"}}>
            <BtnEstatusAut onAutorizar={onAutorizar} />
        </div>
        <div style={{overflow:"auto",maxHeight:"300px"}}>
            <DetallesOrden orden={orden} />
        </div>
        <hr />
        <div style={{overflow:"auto",maxHeight:"300px"}}>
            <TablaProductos />
        </div>
        <section className="float-right p-2">
            Importe Total :
          <b> <u>  $ {orden.importe_total}</u></b>
        </section>
    </ModalBase>);
} 

export default Autorizacion;