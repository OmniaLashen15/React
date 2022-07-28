import React, { useState } from "react";
import {render} from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  //const theme2 = useState("green");

  return (
    /// <LinK> must be inside <BrowserRouter>
    <StrictMode>
      <ThemeContext.Provider value={theme}>
      <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link> 

        {/* <ThemeContext.Provider value={theme2}>
          <Link to="/">Adopt Me!</Link> 
        </ThemeContext.Provider> */}
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/" element={<SearchParams/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
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
