//librerias
import React from 'react';
import { connect } from 'react-redux';
//estilos
import './body.scss'
//conexiones
import conexion_orden_gasto_folio from '../../conections/conexion_orden_gasto_folio';
//actions
import seleccion_orden from '../../actions/seleccion_orden';
import cargando_orden from '../../actions/cargando_orden';
//componentes
import Cargando from '../Cargando';

const CuerpoApp =({ordenes,filtro,seleccionOrden,orden,cargando,cargandoOrden})=>{
    //funciones
    const consultar = async folio =>{
        console.log("Folio Orden=>",folio);
        cargandoOrden(true)
        let respuesta = await conexion_orden_gasto_folio(folio);
        console.log(respuesta)
        setTimeout(()=>cargandoOrden(false),700)
        if(respuesta.length>0){
            seleccionOrden(respuesta[0]);
        }
    }
    console.log("Orden=>",orden)
    return cargando ? <Cargando /> : (<div className="contenedor-tabla">
    <table className="table table-hover">
        <thead className="bg-primary text-white">
            <tr >
                <th className="bg-primary text-white">Folio</th>
                <th className="bg-primary text-white">Proveedor</th>
                <th className="bg-primary text-white">Concepto Solicitud</th>
                <th className="bg-primary text-white">Descripcion</th>
                <th className="bg-primary text-white">Esablecimiento</th>
                <th className="bg-primary text-white">Importe Total</th>
                <th className="bg-primary text-white">Usuario Solicita</th>
                <th className="bg-primary text-white">Fecha</th>
                <th className="bg-primary text-white">Estatus</th>
                <th className="bg-primary text-white">Fecha Aut.</th>
                <th className="bg-primary text-white">Usuario Aut.</th>
                <th className="bg-primary text-white">Tipo Proveedor</th>
                <th className="bg-primary text-white">Folio Servicio</th>
                <th className="bg-primary text-white">Servicio</th>
                <th className="bg-primary text-white">Tipo</th>
                <th className="bg-primary text-white">Usuario Valida</th>
                <th className="bg-primary text-white">Folio Pago</th>
                <th className="bg-primary text-white">Usuario Realiza Pago</th>
                <th className="bg-primary text-white">Observaciones Del Pago</th>
                <th className="bg-primary text-white">Folio Corte Caja Chica</th>
            </tr>
        </thead>
        <tbody>
            {ordenes.filter(f=>f.folio.toString().search(filtro)>-1).map((orden,index) =><tr key={orden.folio+"-"+index}>
                <td onClick={()=>consultar(orden.folio)}><u><b>{orden.folio}</b></u></td>     
                <td>{orden.proveedor}</td> 
                <td>{orden.concepto_solicitud}</td> 
                <td>{orden.descripcion_gasto}</td> 
                <td>{orden.establecimiento}</td> 
                <td>{orden.importe_total}</td> 
                <td>{orden.usuario_solicita}</td> 
                <td>{orden.fecha}</td> 
                <td>{orden.estatus}</td> 
                <td>{orden.fecha_autorizacion}</td> 
                <td>{orden.usuario_autorizo}</td>    
                <td>{orden.tipo_proveedor}</td>            
                <td>{orden.folio_servicio}</td>      
                <td>{orden.servicio}</td>      
                <td>{orden.tipo}</td>      
                <td>{orden.usuario_valida}</td>      
                <td>{orden.folio_pago}</td>      
                <td>{orden.usuario_realizo_pago}</td>      
                <td>{orden.observaciones_del_pago}</td>      
                <td>{orden.folio_corte_caja_chica}</td>                  
                </tr>)}
            </tbody>
        </table>
    </div>);
}

//funciones map
const mapStateProps=state=>({
    ordenes:state.ordenes,
    filtro:state.filtrado_tabla,
    orden:state.orden,
    cargando:state.cargando_orden
  });

const mapDispatchToProps = dispatch =>({
        seleccionOrden(orden){
            dispatch(seleccion_orden(orden))
        },
        cargandoOrden(estatus){
            dispatch(cargando_orden(estatus))
        }
  });

export default connect(mapStateProps,mapDispatchToProps)(CuerpoApp);