import React from "react";
import { Link } from "react-router-dom";
import {  Nav } from "react-bootstrap";

class MyNav extends React.Component {
  render() {
    return (
      <Nav variant="tabs" defaultActiveKey={this.props.location}>
      {this.props.possibleStates.map((value, index) =>
        <Nav.Item key={index}>
          <Nav.Link as={Link} eventKey={value.val} to={value.val} >{value.title}</Nav.Link>
        </Nav.Item>
      )}
      </Nav>
    );
  }
}

export default MyNav;
