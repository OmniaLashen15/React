import React from "react";
import {render} from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
    </div>
  )
}
// const App = () => {//render function
//   return React.createElement("div",{}, [
//       React.createElement("h1", {},"Adopt Me!"),
//       React.createElement(Pet, {
//         name: "Luna",
//         animal: "Dog",
//         breed: "Havanese",
//       }),
//       React.createElement(Pet, {
//         name: "Pepper",
//         animal: "Bird",
//         breed: "Cockatiel",
//       }),
//       React.createElement(Pet, {
//         name: "Doink",
//         animal: "Cat",
//         breed: "Mix",
//       }),
//     ]
//   );
// };
//render(React.createElement(App), document.getElementById("root"));
render(<App/>, document.getElementById("root")); // this is translated into React.creatElement as in the line above.
