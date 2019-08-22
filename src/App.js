import React from 'react';
import consultar_filtro from './actions/consultar_filtro';
import { connect } from 'react-redux';

function App({consultar}) {
  return (
    <div className="container">
       <h3>listo...</h3>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  consultar(filtro){
    dispatch(consultar_filtro(filtro));
    },
});

export default connect(mapDispatchToProps,{})(App);
