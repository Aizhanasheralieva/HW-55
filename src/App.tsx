import "./App.css";
import meatImage from "./assets/meat.png";
import baconImage from "./assets/bacon.png";
import lettuceImage from "./assets/lettuce.png";
import cheeseImage from "./assets/cheese.png";
import picklesImage from "./assets/pickles-for-burger.png";
import redOnionImage from "./assets/redOnion.png";
import BurgerConstruction from "./Components/BurgerConstruction/BurgerConstruction";
import React, { useState } from "react";
import TotalPriceCalculator from "./Components/TotalPriceCalculator/TotalPriceCalculator";

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
    { name: "Meat", count: 0 },
    { name: "Cheese", count: 0 },
    { name: "Bacon", count: 0 },
    { name: "Lettuce", count: 0 },
    { name: "RedOnion", count: 0 },
    { name: "Pickles", count: 0 },
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

  const removeIngredientFromArray = (ingredientName: string) => {
    setIngredients((prevIngredients: ChosenIngredient[]) =>
      prevIngredients.map((ingredient: ChosenIngredient) =>
        ingredient.name === ingredientName && ingredient.count > 0
          ? { ...ingredient, count: ingredient.count - 1 }
          : ingredient
      )
    );
  };

  const INGREDIENTS: Ingredient[object] = [
    { name: "Meat", price: 80, image: meatImage },
    { name: "Bacon", price: 60, image: baconImage },
    { name: "Lettuce", price: 10, image: lettuceImage },
    { name: "Cheese", price: 50, image: cheeseImage },
    { name: "RedOnion", price: 40, image: redOnionImage },
    { name: "Pickles", price: 30, image: picklesImage },
  ];

  const countMatchedIngredient = (ingredientName: string) => {
    const matchedIngredient: ChosenIngredient = ingredients.find(
      (ingredient: ChosenIngredient) => ingredient.name === ingredientName
    );
    return matchedIngredient ? matchedIngredient.count : 0;
  };

  return (
    <>
      <div className="BurgerIngredientBlock">
        <h3>Ingredients</h3>
        <div className="generalBlock">
          {INGREDIENTS.map((ingredient) => (
            <div key={ingredient.name} className="ingredient-container">
              <button
                onClick={() => addIngredientToArray(ingredient.name)}
                style={{background: "none", border: "none", padding: 0}}
              >
                <img src={ingredient.image} alt={ingredient.name} width={50}/>
                <p>{ingredient.name} {countMatchedIngredient(ingredient.name)} pcs</p>
              </button>
              <button
                onClick={() => removeIngredientFromArray(ingredient.name)}
                className="remove-button"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="burger-builder">
      <BurgerConstruction ingredients={ingredients} />
      <TotalPriceCalculator ingredients={ingredients}/>
      </div>
    </>
  );
};

export default App;
