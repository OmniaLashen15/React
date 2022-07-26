//import React from "react";
import {Link} from "react-router-dom";  // for making single page application
const Pet = ({name, animal, breed, images, location, id}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length){
    hero = images[0];
  }
  return (
    //<a href={`/details/${id}`} className="pet">
    /// this anchor tag also but applying single page application
  <Link to={`/details/${id}`} className="pet">   

    <div className="image-container">
        <img src={hero} alt={name} />  
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal} - {breed} - {location}</h2>
      </div>
    </Link>
    //</a>
  )
}

/*
// const Pet = (props) => {
//     //Pet component
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };
*/

  export default Pet;