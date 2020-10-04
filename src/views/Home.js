import React from "react";
import MyNav from "./components/Nav";
import { Container } from "react-bootstrap";

function Home(props) {
  return (
    <Container fluid>
      <MyNav possibleStates={Object.values(props.possibleStates)} />
    </Container>

  )
}
export default Home;