import "./App.css";
import "./components/Inicial/Inicial";
import Button from "./components/Button/Button";
// import { useState } from "react";
import Gentlemen from "./components/Gentlemen/Gentlemen";
import Contador from "./components/Contador/Contador";
// import importData from "./importData";

function App() {
  // const personajes = importData();

  return (
    <>
      <div className="App">
        <h1>Señores que te apuntan con el dedo...ohú</h1>
        <Contador number="5" />
        <Button className="ClassName" text="Marcar Todos" />
        {/* <Button text="text" className="bt1" onClick={useState} /> */}
        <Gentlemen
          name="user1"
          url="foto.png"
          profesion="Apuntador de dedos"
          twitter="twikitu"
          estado="estadito"
        />
      </div>
    </>
  );
}

export default App;
