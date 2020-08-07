import React from "react";
class Person {
  constructor([id, name, eyeColor, height]) {
    this._id = id;
    this._name = name;
    this._eyeColor = (
      <div
        className={
          `${eyeColor === "white" ? "border " : ""}` +
          (eyeColor === "unknown"
            ? "text-center"
            : `m-1 px-3 py-2 bg-${eyeColor.split(",")[0].toLowerCase()}`)
        }
      >
        {eyeColor === "unknown" ? "unknown" : ""}
      </div>
    );
    this._height = height + " cm";
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get eyeColor() {
    return this._eyeColor;
  }
  get height() {
    return this._height;
  }
  toArray = () => {
    return [this.id, this.name, this.eyeColor, this.height];
  };
}
export default Person;

export const peopleInfo = {
  tableHeaders: ["#", "Name", "Eye Color", "Height"],
  fetchInfo: {
    endpoint: "people",
    entity: (args) => new Person(args),
    extractFromObject: ["id", "name", "eye_color", "height"],
  },
  collection: [],
};
