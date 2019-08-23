//librerias
//libreria
import React from 'react';
//estilos
import './autorizacion.scss';

const TablaProductos=({productos})=>{
    return (
        <div className="contenedor_productos"><table className="table table-sm">
        <thead>
            <tr>
                <th className="bg-light">Descripcion</th>
                <th className="bg-light">Cantidad</th>
                <th className="bg-light">P. Unitario.</th>
                <th className="bg-light">Importe</th>
            </tr>
        </thead>
        <tbody>
            {productos.map((producto,index)=><tr key={producto.folio+"_"+index}>
                <td>{producto.descripcion_producto}</td>
                <td>
                    <label  className="float-right">{producto.cantidad}</label>
                </td>
                <td>
                    <label  className="float-right">${producto.precio_unitario}</label>
                </td>
                <td>
                    <label  className="float-right">${producto.precio_unitario*producto.cantidad}</label>
                </td>
            </tr>)}
        </tbody>
    </table>
    </div>);
}

export default TablaProductos;
