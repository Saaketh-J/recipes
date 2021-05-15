import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, link }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>
        <a href={link}>{title}</a>
      </h1>
      <img className={style.image} src={image} />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>
        <strong>Calories:</strong> {Math.floor(calories)}
      </p>
    </div>
  );
};

export default Recipe;
