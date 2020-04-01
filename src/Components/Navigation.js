import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import fetchRecipes from "../utilities/fetchRecipes.js";

function Navigation(props) {
  const [searchTerm, setSearchTerm] = useState();

  const search = event => {
    event.preventDefault();
    if(searchTerm) {
        props.setLoading(true);
        fetchRecipes(searchTerm, {from:0, to:24})
            .then(data => {
                props.setRecipeData(data.hits)
                props.setLoading(false);
                props.setMoreResults(data.more);
                props.setCurrentSearchTerm(searchTerm);
                props.setSearchRange([0,24]);
            });
    }
  };

  return (
    <Navbar bg="light">
      <Navbar.Brand href="#" className="d-none d-sm-block mr-auto">
        Recipe Finder
      </Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm || ""}
          onChange={e => setSearchTerm(e.target.value)}
        ></FormControl>
        <Button type="submit" variant="outline-success" onClick={search}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
