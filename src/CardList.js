import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  //============================================
  //============FORMA 1 DE HACERLO==============
  //============================================

  {
    /*uso de map para recorrer el array de objetos y devolver multiples componentes */
  }
  //   const cardComponente = robots.map((user, i) => {
  // return (
  //SIEMPRE QUE SE TRABAJE CON LOOPS EN REACT SE USA EL KEY
  //       <Card
  //         key={i}
  //         id={robots[i].id}
  //         nombre={robots[i].nombre}
  //         email={robots[i].email}
  //       />
  //     );
  //   });
  //   return <div>{cardComponente}</div>;

  //============================================
  //============FORMA 2 DE HACERLO==============
  //============================================
  return (
    <div>
      {robots.map((user, i) => {
        return (
          //SIEMPRE QUE SE TRABAJE CON LOOPS EN REACT SE USA EL KEY
          <Card
            key={i}
            id={robots[i].id}
            nombre={robots[i].nombre}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
