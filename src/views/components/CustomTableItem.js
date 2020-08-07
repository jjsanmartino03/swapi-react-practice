import React from "react";

class CustomTableItem extends React.Component {
  render() {
    let properties = this.props.element.toArray();
    return (
    <tr>
        {properties.map((prop, index) =>
          <td key={index}>{prop}</td>
        )}
    </tr>
    );
  }
}

export default CustomTableItem;
