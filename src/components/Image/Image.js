import React from "react";
import Inicial from "../Inicial/Inicial";

const Image = (props) => {
  return (
    <>
      <div className="card--image">
        <img src={props.url} alt={props.altMessage} />
        <Inicial name={props.name} />
      </div>
    </>
  );
};

export default Image;
