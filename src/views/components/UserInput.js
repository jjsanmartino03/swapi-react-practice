import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.idRef = React.createRef();
  }
  onFetchClick = () => {
    let id = this.idRef.current.value;
    if (!id) {
      alert("Enter an id");
      return;
    }
    this.props.onFetchElement(id);
  };
  render() {
    let endpoint = this.props.endpoint;
    return (
      <Container fluid="sm">
        <Row>
          <Col className="pt-2 pb-3">
            <label htmlFor="api-url">
              Enter the <b>id</b> of the desired{" "}
              {endpoint === "people" ? "person" : endpoint.replace(/s$/, "")}
            </label>

            <InputGroup >
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://swapi.dev/api/{endpoint}/
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="py-4"
                ref={this.idRef}
                type="number"
                id="api-url"
                aria-describedby="basic-addon3"
              />
              <InputGroup.Append className="d-sm-flex d-none">
                <InputGroup.Text id="basic-addon3">/</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={6} className="py-sm-0 pb-3">
            <Button
              className="py-2"
              onClick={this.onFetchClick}
              variant="primary"
              block
            >
              Fetch{" "}
              {endpoint === "people" ? "person" : endpoint.replace(/s$/, "")}
            </Button>
          </Col>
          <Col sm={6} className="pb-3">
            <Button
              className="py-2"
              onClick={this.props.onFetchAll}
              variant="primary"
              block
            >
              Fetch all {endpoint}
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={8}>
            <Button
              onClick={this.props.onReset} variant="outline-danger" className="py-2"
              block>Reset collection</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserInput;
