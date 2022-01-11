import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons"; //dependecia que permite poner estilos como por ej "bg-light-green"
// import { robots } from "./robots"; lo pasamos al archivo App.js
// import Card from "./Card"; lo pasamos al archivo CardList.js
import CardList from "./CardList";
import App from "./App"; //este es el componente padre

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
