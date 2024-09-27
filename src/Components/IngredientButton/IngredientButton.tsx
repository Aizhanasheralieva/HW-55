import React from "react";
import {Ingredient} from "../../App";


interface Props  {
  ingredient: Ingredient;
  onAdd: (name: string) => void;
}

const object = {
  meat: 0,
  lettuce: 0,
  bacon: 0,
  cheese: 0,
  // если у меня массив сделать по подсчету какую-нибудь map или цикл для объектов, чтобы определить на что я именно нажала
};

const getIngredientName = (ingredientName: string) => {
  console.log(ingredientName);
  object[ingredientName]++;
  console.log(object);
};

const IngredientButton: React.FC<Props> = ({ingredient, onAdd}) => {
  return (
    <div className="ingredient-button">
      <img width={60} src={ingredient.image} alt={ingredient.name}
        onClick={() => getIngredientName(ingredient.name)}
      />
      <span style={{margin: '0 10px'}}>{ingredient.name}</span>
      <button onClick={() => onAdd(ingredient.name)}>Add</button>
    </div>
  );
};

export default IngredientButton;