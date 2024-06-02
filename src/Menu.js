import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "./Constants";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((element, index) => {
          return (
            <Pizza
              key={index}
              src={element.photoName}
              name={element.name}
              ingredients={element.ingredients}
              price={element.price}
              sold={element.soldOut}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Menu;
