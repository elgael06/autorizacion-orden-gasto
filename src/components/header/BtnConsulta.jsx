import React from 'react';

const BtnConsulta =({cargando,consultar})=>cargando ? <button className="btn btn-warning btn-block" >Cargando... <i className="glyphicon glyphicon-send"></i></button>
:<button className="btn btn-info btn-block" onClick={consultar}>Consultar <i className="glyphicon glyphicon-send"></i></button>

export default BtnConsulta;