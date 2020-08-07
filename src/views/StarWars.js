import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserInput from "./components/UserInput";
import CustomTable from "./components/CustomTable";
import axios from "axios";
import MyNav from "./components/Nav";
import possibleStates from "../entities/objectOfEntities";


class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      possibleStates[this.props.location.pathname.replace(/^\//, "")].object;
  }
  /*componentDidMount = async () =>{
		// this.fetchAllElements() Now the user does this with a button
  }*/
  resetCollection = () => {
    this.setState({ collection: [] });
  };

  instanceElement = (object) => {
    let reg = /\/(\d+)\/$/;
    object.id = object.url.match(reg)[1];

    let elemClass = this.state.fetchInfo.entity;

    let args = [...this.state.fetchInfo.extractFromObject];
    let parameters = args.map((prop) => object[prop]);

    return elemClass(parameters);
  };
  fetchElementById = async (id) => {
    try {
      const endpoint = this.state.fetchInfo.endpoint;
      const response = await axios.get(
        `https://swapi.dev/api/${endpoint}/${id}`
      );
      const element = response.data;

      let instanced = this.instanceElement(element);
      this.addElementToCollection(instanced);

    } catch (error) {
      console.error("Error while fetching api: " + error);
      alert("Oops, there was problem with the api")
      return;
    }
  };

  fetchAllElements = async () => {
    const endpoint = this.state.fetchInfo.endpoint;
    var next = `https://swapi.dev/api/${endpoint}/`;
    do {
      try {
        var response = await axios.get(next);
      } catch (error) {
        console.log("Error while fetching API: " + error);
        return;
      }

      var data = response.data;
      let { results } = data;
      var instanced;
      for (let element of results) {
        //element.id = this.state.collection.length+1;
        instanced = this.instanceElement(element);
        this.addElementToCollection(instanced);
      }
      next = data.next;
    } while (next);
  };
  addElementToCollection = (newElement) => {
    let collection = [...this.state.collection];
    collection.push(newElement);
    this.setState({ collection });
  };
  render() {
    let collection = this.state.collection;
    let headers = this.state.tableHeaders;
    let location = this.props.history.location.pathname.replace(/^\//, "");
    return (
      <Container fluid="sm">
        <h1 className="text-center my-3">
          Get <strong>{this.state.fetchInfo.endpoint}</strong> from <br/>SWAPI
        </h1>

        <Row>
          <Col className="mb-3" md={6}>
          <div className="sticky-top py-md-3">
            <MyNav
              location={location}
              possibleStates={Object.values(possibleStates)}
            />
            <UserInput
              endpoint={this.state.fetchInfo.endpoint}
              onFetchElement={this.fetchElementById}
              onFetchAll={this.fetchAllElements}
              onReset={this.resetCollection}
            />
            </div>
          </Col>
          <Col md={6}>
            <CustomTable collection={collection} headers={headers} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StarWars;
