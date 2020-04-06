import React from "react";
import {
  Button,
  Image,
  Container,
  Row,
  Col
} from "react-bootstrap";
import NutritionLabel from "./NutritionLabel";
import "../nutrition-label.scss";

function RecipePage(props) {
  const recipe = props.recipe;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs="auto">
            <Image src={recipe.image} rounded></Image>
          </Col>
          <Col className="d-flex flex-column justify-content-around">
            <Button
              variant="outline-secondary"
              className="mt-2"
              style={{ width: "100px" }}
              onClick={() => props.history.push("/recipe-search/")}
            >
              {"<< Back"}
            </Button>
            <div>
              <h1 className="recipe-label">{recipe.label}</h1>
              <p className="calorie-caption">
                {Math.ceil(recipe.calories / recipe.yield)} calories per serving (makes {recipe.yield} servings)
              </p>
            </div>
            <p>
              Recipe by <b>{recipe.source}</b>
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredientLines.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h2>Recipe</h2>
            <p>
              This recipe was provided by <b>{recipe.source}</b>. Click on the
              button below to view preparation instructions.
            </p>
            <Button
              variant="info"
              onClick={() => window.open(recipe.url, "_blank")}
            >
              Preparation Instructions
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <NutritionLabel recipe={recipe} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RecipePage;
