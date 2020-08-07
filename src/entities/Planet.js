class Planet {
  constructor([id, name, terrain, rotation_period]) {
    this._id = id;
    this._name = name;
    this._terrain = terrain;
    this._rotation_period = rotation_period > 24 ? "Yes" : "No";
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get terrain() {
    return this._terrain;
  }
  get rotation_period() {
    return this._rotation_period;
  }
  toArray = () => {
    return [this.id, this.name, this.terrain, this.rotation_period];
  };
}

export const planetsInfo = {
  tableHeaders: ["#","Name", "Terrain", "Day longer than earth?"],
  fetchInfo: {
    endpoint: "planets",
    entity: (args) => new Planet(args),
    extractFromObject: ["id","name", "terrain", "rotation_period"],
  },
  collection: [],
};

export default Planet;
