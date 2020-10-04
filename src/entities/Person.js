import React from "react";

class Person {
  constructor([id, name, eyeColor, height, birthYear]) {
    this._id = id;
    this._birthYear = birthYear;
    this._name = name;
    this._height = height + " cm";

    this._eyeColor = ( // What to display in the Eye color column of the table
      <div
        className={
          `${eyeColor === "white" ? "border " : ""}`
          +
          (
            eyeColor === "unknown"
              ? "text-center"
              : `m-1 px-3 py-2 bg-${eyeColor.split(",")[0].toLowerCase()}`
          )
        }
      >
        {eyeColor === "unknown" ? "unknown" : ""}
      </div>
    );
  }
  // Some getters here
  get id() {
    return this._id;
  }
  get birthYear() {
    return this._birthYear;
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
    return [this.id, this.name, this.eyeColor, this.height, this.birthYear];
  };
}
export default Person;

export const peopleInfo = {
  tableHeaders: ["#", "Name", "Eye Color", "Height", "Birth Year"],
  fetchInfo: {
    endpoint: "people",
    entity: (args) => new Person(args),
    extractFromObject: ["id", "name", "eye_color", "height", "birth_year"],
  },
  collection: [],
};
