import React from "react";
import MyNav from "./components/Nav";
import {Container} from "react-bootstrap";

import possibleStates from "../entities/objectOfEntities";

function Home(props){
  return (
    <Container fluid>
      <MyNav  possibleStates={Object.values(possibleStates)}/>
    </Container>
    
  )
}
export default Home;