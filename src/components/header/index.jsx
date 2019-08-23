//librerias
import React from 'react';
import { connect } from 'react-redux';
//estilos

//conexion 
import conexion_ordenes_filtro from "../../conections/conexion_ordenes_filtro";
//actions
import consultar_filtro from '../../actions/consultar_filtro';
import cambio_filtro from '../../actions/cambio_estatus';
import cargando_tabla from '../../actions/cargando_tabla';
//componentes
import BtnConsulta from './BtnConsulta';

//variables
const tipos_orden =["Autorizado","Pendiente","Cancelado","Negado","Finalizado","Terminado","En  Validacion","Pago Cheque"];

const Cavecera =({filtro,cambioOrrdenes,evFiltro,cargando,evCargar})=>{

    //funciones
    const cambiar= async e=>{
        console.log(filtro);
        evFiltro(e.target.value);
        cambioOrrdenes([]);
        evCargar(true)
        let res = await conexion_ordenes_filtro(e.target.value || "Pendientes");
        setTimeout(()=>evCargar(false),700)
        cambioOrrdenes(res);
    }
    const consultar = async e=>{
        e.preventDefault();
        evCargar(true)
        let res = await conexion_ordenes_filtro(filtro || "Pendientes");
        setTimeout(()=>evCargar(false),700)
        cambioOrrdenes(res);
    }

    return (<div className="row p-3">
    <h5 className="col-sm-12 p-2">Autorizacio De Ordenes De Gasto.</h5> 
    <hr />
    <h6 className="col-sm-2">Tipo Orden :</h6>
    <section className="col-sm-6">
        <select
             className="form-control"
             disabled={cargando}
             onChange={cambiar}
             defaultValue={filtro}>
            { tipos_orden.map(orden=><option key={orden} >{orden}</option>)}
        </select>
    </section>
    <section className="col-sm-4">
    <BtnConsulta cargando={cargando} consultar={consultar}  />
    </section>
</div>);
}

//funciones map
const mapStateProps=state=>({
    filtro:state.filtro,
    cargando:state.cargando_tabla
  });

const mapDispatchToProps = dispatch =>({
    cambioOrrdenes(ordenes){
      dispatch(consultar_filtro(ordenes));
      },
      evFiltro(filtro){
          dispatch(cambio_filtro(filtro))
      },
      evCargar(estado){
        dispatch(cargando_tabla(estado))
      }
  });

export default connect(mapStateProps,mapDispatchToProps)(Cavecera);
