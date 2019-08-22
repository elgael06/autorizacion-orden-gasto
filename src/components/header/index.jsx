import React from 'react';
import { connect } from 'react-redux';
//estilos

//conexion 
import conexion_ordenes_filtro from "../../conections/conexion_ordenes_filtro";
//actions
import consultar_filtro from '../../actions/consultar_filtro';
import cambio_filtro from '../../actions/cambio_estatus';

//variables
const tipos_orden =["Autorizada","Pendiente","Cancelada","Negada"];

const Cavecera =({filtro,cambioOrrdenes,evFiltro})=>{

    //funciones
    const cambiar= async e=>{
        console.log(filtro);
        evFiltro(e.target.value);
        cambioOrrdenes([]);
        let res = await conexion_ordenes_filtro(e.target.value || "Pendientes");
        cambioOrrdenes(res);
    }
    const consultar = async e=>{
        e.preventDefault();
        let res = await conexion_ordenes_filtro(filtro || "Pendientes");
        cambioOrrdenes(res);
    }

    return (<div className="row p-3">
    <h3 className="col-sm-12">Ordenes de Compra Interna</h3> 
    <hr />
    <section className="col-sm-6">
        <label>Tipo Orden :</label>
        <select className="form-control" onChange={cambiar}  defaultValue={filtro}>
            { tipos_orden.map(orden=><option key={orden} >{orden}</option>)}
        </select>
    </section>
    <section className="col-sm-4">
    <button className="btn btn-info btn-block m-4" onClick={consultar}>Consultar <i className="glyphicon glyphicon-send"></i></button>
    </section>
</div>);
}

//funciones map
const mapStateProps=state=>({
    filtro:state.filtro
  });

const mapDispatchToProps = dispatch =>({
    cambioOrrdenes(ordenes){
      dispatch(consultar_filtro(ordenes));
      },
      evFiltro(filtro){
          dispatch(cambio_filtro(filtro))
      }
  });

export default connect(mapStateProps,mapDispatchToProps)(Cavecera);