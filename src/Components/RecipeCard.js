import React from "react";
import { Card } from "react-bootstrap";

function RecipeCard(props) {

  const recipe = props.recipe;

  return (
    <Card style={{ width: "250px" }} onClick={() => props.selectRecipe(recipe)}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Card.Title>{recipe.label}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
