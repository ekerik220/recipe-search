import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorage from "./utilities/useLocalStorage";
import Navigation from "./Components/Navigation";
import RecipeArea from "./Components/RecipeArea";
import RecipePage from "./Components/RecipePage";
import ScrollIntoView from "./Components/ScrollIntoView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [recipeData, setRecipeData] = useLocalStorage("recipeData");
  const [selectedRecipe, setSelectedRecipe] = useLocalStorage("selectedRecipe");
  const [loading, setLoading] = useState(false);

  // Clear local storage when the page is loaded fresh.
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollIntoView>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <div>
                  <Navigation
                    {...props}
                    setRecipeData={setRecipeData}
                    setLoading={setLoading}
                  />
                  <RecipeArea
                    {...props}
                    recipeData={recipeData}
                    loading={loading}
                    setSelectedRecipe={setSelectedRecipe}
                  />
                </div>
              )}
            />

            <Route
              path="/recipe"
              render={props => (
                <RecipePage {...props} recipe={selectedRecipe} />
              )}
            />
          </Switch>
        </ScrollIntoView>
      </div>
    </Router>
  );
}

export default App;
