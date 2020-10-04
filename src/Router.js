import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StarWars from "./views/StarWars";
import Home from "./views/Home";
import possibleStates from "./entities/objectOfEntities";

function MyRouter(props) {
  return (
    <Router>
      <Route path="/" exact>
        <Home possibleStates={possibleStates} />
      </Route>
      {
        Object.values(possibleStates).map((value, index) => {
          return (<Route key={index} exact path={`/${value.val}`}>
            <StarWars state={value.object} />
          </Route>)
        })
      }
    </Router>
  );
}

export default MyRouter;