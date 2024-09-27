import {useState} from "react";
import "./App.css";
import meatImage from "./assets/meat.png";
import baconImage from "./assets/bacon.png";
import lettuceImage from "./assets/lettuce.png";
import cheeseImage from "./assets/cheese.png";

export interface Ingredient {
  name: string;
  price: number;
  image: string;
}

interface chosenIngredient {
  name: string,
  count: number,
}

const App = () => {
  const [ingredients, setIngredients] = useState<chosenIngredient[]>([
    {name: "Meat", count: 0},
    {name: "Cheese", count: 0},
    {name: "Bacon", count: 0},
    {name: "Lettuce", count: 0},
  ]);

  const addIngredientToArray = (ingredientName: string) => {
    setIngredients((prevIngredients) => {
      return prevIngredients.map((ingredient) => {
        if (ingredient.name === ingredientName) {
          return {...ingredient, count: ingredient.count + 1}
        }
        return ingredient;
      });
    });
  };

//   обычный map или forEach подойдет для поиска чтобы увеличивать count ("счетчик" данного ингредиента.):


  const INGREDIENTS: Ingredient[{ name: string, price: number, image: string }] = [

    {name: "meat", price: 80, image: meatImage},
    {name: "bacon", price: 60, image: baconImage},
    {name: "lettuce", price: 10, image: lettuceImage},
    {name: "cheese", price: 50, image: cheeseImage},
  ];

  return (
    <>
      <div>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          <div className="BreadBottom"></div>
        </div>
      </div>

      {INGREDIENTS.map(ingredient => (
        <button style={{background: "none", border: "none"}}
          key={ingredient.name}
          onAdd={addIngredientToArray}
          type="button">
        </button>
      ))}

    </>
  )
};

export default App;
