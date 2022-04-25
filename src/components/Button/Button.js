import React from "react";
import { useState } from "react";

const Button = (props) => {
  return (
    <button className={props.className} onClick={useState}>
      {props.text}
    </button>
  );
};

export default Button;
