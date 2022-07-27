import { useState, useEffect } from "react"; // useState&useEffect are hook 
import Pet from "./Pet"

const Animals = ["bird","cat","dog","rabbit","reptile"];

const SearchParams = () =>{
    //const location = "seattle, WA";
    const [location,setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed,setBreed] = useState("");
    const breeds = [];
    const [pets,setPets] = useState([]); // it renders first with no data then it renders for the second time with the data from api

    useEffect(() => {  //allows developers to do asynchronous actions, to make an API request when the application first renders.
        requestPets();  //called once after the app is rendered the first time
    }, []) // eslint-disable-line react-hooks/exhaustive-deps  
                   // this led to prevent it from giving any error
    
    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets)
    }
    /*  
    
    //npm install -D eslint-plugin-react-hooks@4.3.0  
    //for checking the rules of hooks and not allowing to break it
    
    if(true){     ///this will cause error as it breaks the rules of hooks
        
        const [animal, setAnimal]=useState("");
    }
    */    
   
    //// One Way Data Binding
    return (
        //{location}
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location 
                    <input id="location" 
                    value={location}
                     placeholder="Location" 
                     onChange={(e)=>setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                    id="animal"
                    value={animal}
                    onChange={(e)=>{
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                    onBlur={(e)=>{
                        setAnimal(e.target.value);
                        setBreed("");
                    }}>
                        <option/>
                        {Animals.map((animal)=>(  // one line function implicitly return the option () for having multiple lines
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            )
                        )}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                    id="breed"
                    value={breed}
                    onChange={(e)=>{
                        setBreed(e.target.value);
                    }}
                    onBlur={(e)=>{
                        setBreed(e.target.value);
                    }}>
                        <option/>
                        {breeds.map((breed)=>(  // one line function implicitly return the option () for having multiple lines
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            )
                        )}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => (
                    <Pet 
                    name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed} 
                    key={pet.id}/>     // if this key is the id of database it's not good to use key 
                                       // as if two element swapped there id will not be swapped
                ))
            }
        </div>
        )
}

export default SearchParams;