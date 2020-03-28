import React from "react";
import RecipeCard from "./RecipeCard";
import { Container, Col, Row } from "react-bootstrap";
import CustomLink from "../utilities/CustomLink";

function RecipeArea(props) {
  const selectRecipe = recipe => {
    props.setSelectedRecipe(recipe);
    props.history.push("/recipe");
  };

  if (props.recipeData && !props.loading) {
    return (
      <Container id="recipe-container">
        <Row>
          {props.recipeData.hits.map(hit => {
            const recipe = hit.recipe;
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="d-flex justify-content-center mt-4"
              >
                <RecipeCard recipe={recipe} selectRecipe={selectRecipe} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else {
    return (
      <div id="status-text-box">
        {props.loading ? (
          <i class="fas fa-cog fa-spin fa-5x"></i>
        ) : (
          <h1>Use the search to find a recipe!</h1>
        )}
      </div>
    );
  }
}

export default RecipeArea;
