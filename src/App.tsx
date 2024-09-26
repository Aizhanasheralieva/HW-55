import {useState} from "react";
import "./App.css";
import meatImage from "./assets/meat.png";
import baconImage from "./assets/bacon.png";
import lettuceImage from "./assets/lettuce.png";
import cheeseImage from "./assets/cheese.png";

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const App = () => {
//   const [ingredients, setIngredients] = useState([
//
//     {name: 'Meat': count: 0},
//
//   {name: 'Cheese': count: 0},
//
// ...
//
// ]};
//   обычный map или forEach подойдет для поиска чтобы увеличивать count






const INGREDIENTS: Ingredient[{name: string, price: number, image: string}] = [

    {name: "meat", price: 80, image: meatImage},
    {name: "bacon", price: 60, image: baconImage},
    {name: "lettuce", price: 10, image: lettuceImage},
    {name: "cheese", price: 50, image: cheeseImage},
  ];

  const object = {
    meat: 0,
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    // если у меня массив сделать по подсчету какую-нибудь map или цикл для объектов, чтобы определить на что я именно нажала
  };

  const getIngredientName = (ingredientName: string) => {
    console.log(ingredientName)
    object[ingredientName] ++;
    console.log(object);
  };


  return (
    <>
      <div>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {/*<div className="Salad"></div>*/}
          {/*<div className="Cheese"></div>*/}
          {/*<div className="Meat"></div>*/}
          <div className="BreadBottom"></div>
        </div>
      </div>

      {INGREDIENTS.map(ingredient => (
        <button style={{background: "none", border: "none"}} onClick={() => getIngredientName(ingredient.name)} key={ingredient.name} type="button"><img width={50} src={ingredient.image} alt={ingredient.name}/>
        </button>
      ))}

    </>
  );
};

export default App;
