import React from "react";

const Contador = (props) => {
  return (
    <>
      <div className="card--counter">
        {props.number} señores que te apuntan con el dedo marcados
      </div>
    </>
  );
};

export default Contador;
