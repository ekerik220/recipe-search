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
  const [moreResults, setMoreResults] = useLocalStorage(false);
  const [currentSearchTerm, setCurrentSearchTerm] = useLocalStorage("currentSearchTerm", "");
  const [searchRange, setSearchRange] = useLocalStorage("searchRange", [0, 24]);

  // Clear local storage when the page is loaded fresh.
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
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
                    setMoreResults={setMoreResults}
                    setCurrentSearchTerm={setCurrentSearchTerm}
                    setSearchRange={setSearchRange}
                  />
                  <RecipeArea
                    {...props}
                    recipeData={recipeData}
                    loading={loading}
                    moreResults={moreResults}
                    currentSearchTerm={currentSearchTerm}
                    searchRange={searchRange}
                    setSearchRange={setSearchRange}
                    setSelectedRecipe={setSelectedRecipe}
                    setMoreResults={setMoreResults}
                    setRecipeData={setRecipeData}
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
