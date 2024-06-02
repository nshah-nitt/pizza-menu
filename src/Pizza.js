import React from "react";

const Pizza = (props) => {
  return (
    <li className={props.sold ? "pizza sold-out" : "pizza"}>
      <img src={props.src} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.sold ? "Sold Out" : props.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
