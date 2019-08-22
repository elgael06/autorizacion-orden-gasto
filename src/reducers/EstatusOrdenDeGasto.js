
const EstatusOrdenDeGasto =(state=[],actions)=>{
    switch(actions.type){
        case "ADD":
            return actions.filtro;
        default:
            return "";
    }
}

export default EstatusOrdenDeGasto;