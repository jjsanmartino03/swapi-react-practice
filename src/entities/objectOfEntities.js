import { peopleInfo } from "./Person";
import { planetsInfo } from "./Planet";
import { starshipsInfo } from "./Starship";

const objectOfEntities = { // This object contains the necessary info to be given to a reusable React component
  // This is so important for the application. It makes it super easy 
  // to add or modify pages. For example, to add another page like 
  // "Species" the only thing you have to do is to add here its name 
  // and an object describing its info, like in the others. You can 
  // also add another column to the people's page, just by modifying 
  // its object in Person.js
  people: {
    title: "People",
    val: "people",
    object: peopleInfo
  },
  planets: {
    title: "Planets",
    val: "planets",
    object: planetsInfo,
  },
  starships: {
    title: "Starships",
    val: "starships",
    object: starshipsInfo,
  }
};

export default objectOfEntities;
