import React from "react";


interface Props {
  ingredients: {name: string; count: number} [];
};
const BurgerConstruction: React.FC<Props> = ({ingredients}) => {
  return (
    <div className="burger">
      <h3>Burger</h3>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {ingredients.map((ingredient) => {
          const ingredientsParts = [];
          for (let i = 0; i < ingredient.count; i++) {
            ingredientsParts.push(
              <div key={`${ingredient.name}-${i}`} className={ingredient.name}></div>
            );
          }
          return ingredientsParts;
        })}

        <div className="BreadBottom"></div>
      </div>
    </div>
  );
};

export default BurgerConstruction;