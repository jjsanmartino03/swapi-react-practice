class Starship {
  constructor([id, name, crew, type]) {
    this._id = id;
    this._name = name;
    this._crew = crew;
    this._type = type.replace(/^\w/, (c) => c.toUpperCase());;
  }
  get id() { return this._id }
  get name() { return this._name }
  get crew() { return this._crew }
  get type() { return this._type }
  toArray = () => [this.id, this.name, this.crew, this.type]
}

export const starshipsInfo = {
  tableHeaders: ["#", "Name", "Crew", "Starship class"],
  fetchInfo: {
    endpoint: "starships",
    entity: (args) => new Starship(args),
    extractFromObject: ["id", "name", "crew", "starship_class"],
  },
  collection: [],
};

export default Starship;