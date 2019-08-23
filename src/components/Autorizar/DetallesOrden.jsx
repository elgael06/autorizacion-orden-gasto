import React from 'react';

const DetallesOrden= ({orden})=>{
    return(<article className="row">
        <section className="col-sm-6">
            <label>Solicita :</label>
            <i className="form-control form-control-sm">{orden.usuario_solicita}</i>
        </section>
        <section className="col-sm-3">
            <label>Fecha Solicita :</label>
            <i className="form-control form-control-sm">{orden.fecha}</i>
        </section>
        <section className="col-sm-3">
            <label>Concepto  :</label>
            <i className="form-control form-control-sm">{orden.concepto_solicitud}</i>
        </section>
        <section className="col-sm-6">
            <label>Valida :</label>
            <i className="form-control form-control-sm">{orden.usuario_valida || "Sin validar..."}</i>
        </section>
        <section className="col-sm-3">
            <label>Fecha Valida :</label>
            <i className="form-control form-control-sm">{orden.fecha}</i>
        </section>
        <section className="col-sm-3">
            <label>Estatus  :</label>
            <i className="form-control form-control-sm">{orden.estatus}</i>
        </section>
        <section className="col-sm-6">
            <label>Establecimiento  : </label>
            <i className="form-control form-control-sm">{orden.establecimiento}</i>
        </section>
        <section className="col-sm-3">
            <label>Folio Orden :</label>
            <i className="form-control form-control-sm">{orden.folio}</i>
        </section>
        <section className="col-sm-3">
            <label>Tipo  :</label>
            <i className="form-control form-control-sm">{orden.tipo}</i>
        </section>
        <section className="col-sm-12">
            <label>Descripcion :</label>
            <textarea rows="3" style={{resize:"none"}} className="form-control form-control-sm" disabled>{orden.descripcion_gasto}</textarea>
        </section>
    </article>);
}

export default DetallesOrden;