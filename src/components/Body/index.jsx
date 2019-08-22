//librerias
import React from 'react';
import { connect } from 'react-redux';
//estilos
import './body.scss'
const CuerpoApp =({ordenes,filtro})=>{

return (
    <div className="contenedor-tabla">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr >
                                <th className="bg-primary text-white">Folio</th>
                                <th className="bg-primary text-white">Descripcion</th>
                                <th className="bg-primary text-white">Esablecimiento</th>
                                <th className="bg-primary text-white">Concepto</th>
                                <th className="bg-primary text-white">Fecha</th>
                                <th className="bg-primary text-white">Importe</th>
                                <th className="bg-primary text-white">Proveedor</th>
                                <th className="bg-primary text-white">Tipo Prov.</th>
                                <th className="bg-primary text-white">Tipo Pago</th>
                                <th className="bg-primary text-white">Solicita</th>
                                <th className="bg-primary text-white">Valida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenes.filter(f=>f.folio.toString().search(filtro)>-1).map((orden,index) =><tr key={orden.folio+"-"+index}>
                            <td><u><b>{orden.folio}</b></u></td>     
                            <td>{orden.descripcion_gasto}</td> 
                            <td>{orden.establecimiento}</td> 
                            <td>{orden.concepto_solicitud}</td> 
                            <td>{orden.fecha}</td> 
                            <td>${orden.importe_total}</td> 
                            <td>{orden.proveedor}</td> 
                            <td>{orden.tipo_proveedor}</td> 
                            <td>{orden.tipo}</td> 
                            <td>{orden.usuario_solicita}</td> 
                            <td>{orden.usuario_valida}</td>                      
                        </tr>)}
                    </tbody>
                </table>
    </div>);
}


//funciones map
const mapStateProps=state=>({
    ordenes:state.ordenes,
    filtro:state.filtrado_tabla
  });

const mapDispatchToProps = dispatch =>({

  });

export default connect(mapStateProps,mapDispatchToProps)(CuerpoApp);