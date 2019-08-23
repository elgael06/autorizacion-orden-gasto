//libreria
import React from 'react';

const FitroTabla =({filtro,onFiltro,cargando})=><div>
        <input 
            className="form-control"  
            disabled={cargando} 
            placeholder="Filtro Ordenes de Compras ..." 
            value={filtro}  
            onChange={e=>onFiltro(e.target.value)}
         />
    </div>;

export default FitroTabla;