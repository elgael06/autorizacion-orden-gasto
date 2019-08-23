//librerias
import React from 'react';

const BtnEstatusAut =({onAutorizar})=>{

    return (<div className="">
        <i className="btn btn-info btn-sm" onClick={()=>onAutorizar("A")}><i className="fa fa-check"></i> Autorizar.</i>
        <i className="btn btn-primary btn-sm" onClick={()=>onAutorizar("P")}> <i className="fa fa-arrow-left"></i> Pendiente.</i>
        <i className="btn btn-warning btn-sm" onClick={()=>onAutorizar("C")}> <i className="fa fa-close"></i> Cancelar.</i>
        <i className="btn btn-danger btn-sm" onClick={()=>onAutorizar("N")}><i className="fa fa-warning"></i> Negar.</i>
    </div>);
}

export default BtnEstatusAut;