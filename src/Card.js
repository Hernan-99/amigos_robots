import React from "react";

// const card = props => {
// const { name, email, id } = props; // esto lo usamos si elegimos la segunda opcion
// return (
/*============================*/
/*  FORMA 1 DE HACERLO SERIA  */
/*===========================*/
/*estilos de tachyons*/
// <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//   <img src={`https://robohash.org/${props.id}`} alt="foto robot" />
//   <div>
//     <h2>{props.name}</h2>
//     <p>{props.email}</p>
//   </div>
// </div>

/*============================*/
/*  FORMA 2 DE HACERLO SERIA  */
/*===========================*/
// <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//   <img src={`https://robohash.org/${id}`} alt="foto robot" />
//   <div>
//     <h2>{name}</h2>
//     <p>{email}</p>
//   </div>
// </div>
// );
// };

/*===================================================*/
/*  FORMA 3 DE HACERLO SERIA MUCHO MEJOR Y MAS LIMPIA*/
/*===================================================*/
const card = ({ nombre, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="foto robot" />
      <div>
        <h2>{nombre}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default card;
