
const cargando_tabla= (state=false,actions)=>{
    switch(actions.type){
        case "CARGANDO_TABLA":
            return actions.estatus;
            default :
            return state;
    }
}

export default cargando_tabla;