//librerias
import React from 'react';
//conexiones
import conexion_orden_gasto_folio from '../../conections/conexion_orden_gasto_folio';

const TablaOrdenes =({ordenes,filtro,seleccionOrden,cargandoOrden,evMostrarModal})=>{
    //funciones
    const consultar = async orden =>{
        console.log("Folio Orden=>",orden.folio);
        cargandoOrden(true)
        let respuesta = await conexion_orden_gasto_folio(orden.folio);
        setTimeout(()=>{
            cargandoOrden(false)
        if(respuesta.length>0){
            const seleccion ={
                ...orden,
                productos:respuesta
            }
            console.log(seleccion)
            seleccionOrden(seleccion);
            evMostrarModal();
        }
        },700)
    }
return (<div className="contenedor-tabla">
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
            <td onClick={()=>consultar(orden)}><u><b>{orden.folio}</b></u></td>     
            <td>{orden.proveedor}</td> 
            <td>{orden.concepto_solicitud}</td> 
            <td>{orden.descripcion_gasto}</td> 
            <td>{orden.establecimiento}</td> 
            <td>${orden.importe_total}</td> 
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

export default TablaOrdenes;