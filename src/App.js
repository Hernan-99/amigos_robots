import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Buscador from "./Buscador";

class App extends Component {
  constructor() {
    super(); //super es necesario ponerlo cuando se usa this
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  //con esta funcion hacemos que, cada vez que se busque un nombre se cambie
  cambiarAlBuscar = event => {
    this.setState({ searchfield: event.target.value }); //setState metodo de react que sirve para cambiar de estado

    // console.log(busquedaRobotsFiltro);
  };
  render() {
    const busquedaRobotsFiltro = this.state.robots.filter(robot => {
      return robot.nombre
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Robots</h1>
        <Buscador searchCange={this.cambiarAlBuscar} />
        <CardList robots={busquedaRobotsFiltro} />
      </div>
    );
  }
}

export default App;
