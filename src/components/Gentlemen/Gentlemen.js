import React from "react";
import Image from "../Image/Image";

const Gentlemen = (props) => {
  return (
    <>
      <div className="cards--container">
        <div className="card--container">
          <Image
            url={props.url}
            altMessage={props.altMessage}
            name={props.name}
          />
          <div className="card_Right">
            <h1>{props.name}</h1>
            <h4>Profesión: {props.profesion}</h4>
            <h4>Estado: {props.estado}</h4>
            <h4>Twitter: {props.twitter}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gentlemen;
