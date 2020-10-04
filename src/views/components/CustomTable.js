import React from "react";
import { Table } from "react-bootstrap";
import CustomTableItem from "./CustomTableItem";

class CustomTable extends React.Component {
  render() {
    let headers = this.props.headers;
    let collection = this.props.collection;
    return (
      <Table hover responsive="md" >
        <thead className="thead-light">
          <tr >
            {headers.map((header, index) =>
              <th key={index}>{header}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {collection.map((element, index) =>
            <CustomTableItem key={index} element={element} />
          )}
        </tbody>
      </Table>
    );
  }
}
export default CustomTable;
