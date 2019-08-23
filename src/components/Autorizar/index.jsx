//librerias
import React from 'react';
//componentes
import ModalBase from '../ModalBase';
import BtnEstatusAut from './BtnEstatusAut';

const Autorizacion =({vista,evMostrarModal})=>{
    //funciones
    const onCerrar =()=>{
        console.log("cerrar...");
        evMostrarModal(false);
    }
    return !vista || (<ModalBase titulo={"Autorizacion De Orden De Gasto"} onCerrar={onCerrar}>
        <BtnEstatusAut />
    </ModalBase>);
} 

export default Autorizacion;