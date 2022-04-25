import React from "react";
import "../Inicial/Inicial.css";

const Inicial = (props) => {
  let letra = props.name[0];

  return (
    <>
      <div className="inicial--nombre">{letra}</div>
    </>
  );
};

export default Inicial;
