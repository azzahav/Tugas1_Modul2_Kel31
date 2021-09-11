import "../../index.scss";
import React from "react";
export default function Card(props) {
  const { menu } = props;
  return (
    <div>  
        <div className="wrapper">
    {menu.map((menu) => (
    <div className="card">       
    <div className="card__body">
      <img src={menu.img} class="card__image" />
      <h2 className="card__title">{menu.title}</h2>
      <p className="card__description">{menu.description}</p>
      </div>
    <button className="card__btn">View Recipe</button>
  </div>
 
    ))}
    <div className="space"></div>
  </div>
  </div>
  );
}
