import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import StarWars from "./views/StarWars";
import Home from "./views/Home";
import possibleStates from "./entities/objectOfEntities";

function MyRouter(props){
    return (
        <Router>
        <Route path="/" exact component={Home}/>
        {
            Object.values(possibleStates).map((value,index) => 
            <Route key={index} exact path={`/${value}`} component={StarWars}/>)
        }
            <Route path="/people" exact  component={StarWars}/>
            <Route path="/starships" exact  component={StarWars}/>
            <Route path="/planets" exact  component={StarWars}/>
        </Router>
    );
}

export default MyRouter;