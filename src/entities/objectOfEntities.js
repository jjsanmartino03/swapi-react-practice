import { peopleInfo } from "./Person";
import { planetsInfo } from "./Planet";
import { starshipsInfo } from "./Starship";

const objectOfEntities = {
  people: { title: "People", val: "people", object: peopleInfo },
  planets: { title: "Planets", val: "planets", object: planetsInfo },
  starships: { title: "Starships", val: "starships", object: starshipsInfo },
};

export default objectOfEntities;
