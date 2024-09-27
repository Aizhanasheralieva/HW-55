import React, { useState } from "react";
import "./App.css";
import meatImage from "./assets/meat.png";
import baconImage from "./assets/bacon.png";
import lettuceImage from "./assets/lettuce.png";
import cheeseImage from "./assets/cheese.png";
import BurgerConstruction from "./Components/BurgerConstruction/BurgerConstruction";

export interface Ingredient {
  name: string;
  price: number;
  image: string;
}

interface ChosenIngredient {
  name: string;
  count: number;
}

const App = () => {
  const [ingredients, setIngredients] = useState<ChosenIngredient[]>([
    {name: "Meat", count: 0},
    {name: "Cheese", count: 0},
    {name: "Bacon", count: 0},
    {name: "Lettuce", count: 0},
  ]);

  const addIngredientToArray = (ingredientName: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.name === ingredientName
          ? { ...ingredient, count: ingredient.count + 1 }
          : ingredient
      )
    );
  };

  const INGREDIENTS: Ingredient[object] = [
    { name: "Meat", price: 80, image: meatImage },
    { name: "Bacon", price: 60, image: baconImage },
    { name: "Lettuce", price: 10, image: lettuceImage },
    { name: "Cheese", price: 50, image: cheeseImage },
  ];

  return (
    <>
      <div>
        {INGREDIENTS.map((ingredient) => (
          <button
            key={ingredient.name}
            onClick={() => addIngredientToArray(ingredient.name)}
            style={{ background: "none", border: "none" }}
          >
            <img src={ingredient.image} alt={ingredient.name} width={50} />
            <p>{ingredient.name}</p>
          </button>
        ))}
      </div>
      <BurgerConstruction ingredients={ingredients}/>
    </>
  );
};

export default App;
