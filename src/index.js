import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";

const App = () => {
  //Destructuring Arrays
  console.log(animals);
  const [cat, dog] = animals;
  console.log(cat);
  console.log(dog);

  console.log(useAnimals(cat));
  const [animal, makeSound] = useAnimals(cat);

  console.log("animal = " + animal);
  makeSound();

  return <h1>Animals Exercise!</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./practice";

// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;
// const {
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour, hondaTopColour2]
// } = honda;
// const {
//   coloursByPopularity: [teslaTopColour, teslaTopColour2]
// } = tesla;

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Top Colour</th>
//       <th>Top Colour</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//       <td>{teslaTopColour2}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//       <td>{hondaTopColour2}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
