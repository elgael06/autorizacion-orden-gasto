//librerias
import React from 'react';

const TablaProductos=({productos})=>{
    return (<table className="table table-sm">
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
                <td>{producto.cantidad}</td>
                <td>${producto.precio_unitario}</td>
                <td>${producto.precio_unitario*producto.cantidad}</td>
            </tr>)}
        </tbody>
    </table>);
}

export default TablaProductos;
