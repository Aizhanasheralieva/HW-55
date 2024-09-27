import React from "react";
import meatImage from "../../assets/meat.png";
import baconImage from "../../assets/bacon.png";
import lettuceImage from "../../assets/lettuce.png";
import cheeseImage from "../../assets/cheese.png";
import redOnionImage from "../../assets/redOnion.png";
import picklesImage from "../../assets/pickles-for-burger.png";
import {Ingredient} from "../../App";

interface Props {
  ingredients: { name: string; count: number } [];
}


const INGREDIENTS: Ingredient[object] = [
  {name: "Meat", price: 80, image: meatImage},
  {name: "Bacon", price: 60, image: baconImage},
  {name: "Lettuce", price: 10, image: lettuceImage},
  {name: "Cheese", price: 50, image: cheeseImage},
  {name: "RedOnion", price: 40, image: redOnionImage},
  {name: "Pickles", price: 30, image: picklesImage},
];

const TotalPriceCalculator: React.FC<Props> = ({ingredients}) => {
  const basicPrice = 30;
  const calculateTotalBurgerPrice = () => {
    return ingredients.reduce((total, ingredient) => {
      const extraInformationAboutIngredient = INGREDIENTS.find((i) => i.name === ingredient.name);
      if (extraInformationAboutIngredient) {
        return total + extraInformationAboutIngredient.price * ingredient.count;
      }
      return total;
    }, basicPrice);
  };

  return (
    <div className="price-calculator">
      <h2>Total price: {calculateTotalBurgerPrice()} KGS</h2>
    </div>
  );
};

export default TotalPriceCalculator;