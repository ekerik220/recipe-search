import React from "react";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import fetchRecipes from "../utilities/fetchRecipes.js";

function RecipeArea(props) {

  const [loadingMore, setLoadingMore] = useState(false);

  const selectRecipe = recipe => {
    props.setSelectedRecipe(recipe);
    props.history.push("/recipe");
  };

  const loadMoreResults = () => {
    // Bump the searchRange indexes up  by 25
    const start = props.searchRange[0] + 25;
    const end = props.searchRange[1] + 25;
    props.setSearchRange([start, end]);

    // Set loading more results flag... turn it off once we receive results from API
    setLoadingMore(true);
    
    // Make the API call. Add the new recipes to recipe list state.
    fetchRecipes(props.currentSearchTerm, {
      from: start,
      to: end
    }).then(data => {
      props.setRecipeData(props.recipeData.concat(data.hits));
      props.setMoreResults(data.more);  // Are there more results beyond the current search range?
      setLoadingMore(false);
    });
  };

  if (props.recipeData && !props.loading) {
    return (
      <Container id="recipe-container">
        <Row>
          {props.recipeData.map(hit => {
            const recipe = hit.recipe;
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="d-flex justify-content-center mt-4"
                key={recipe.uri}
              >
                <RecipeCard recipe={recipe} selectRecipe={selectRecipe} />
              </Col>
            );
          })}
        </Row>
        {props.moreResults && (
          <Row>
            <Col className="d-flex justify-content-center my-5">
              {loadingMore ? (
                <i className="fas fa-cog fa-spin fa-2x"></i>
              ) : (
                <Button onClick={loadMoreResults} variant="outline-primary">
                  Load more recipes...
                </Button>
              )}
            </Col>
          </Row>
        )}
      </Container>
    );
  } else {
    return (
      <div id="status-text-box">
        {props.loading ? (
          <i className="fas fa-cog fa-spin fa-5x"></i>
        ) : (
          <h1>Use the search to find a recipe!</h1>
        )}
      </div>
    );
  }
}

export default RecipeArea;
