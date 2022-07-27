import { useState } from "react"; // useState is a hook 

const Animals = ["bird","cat","dog","rabbit","reptile"];

const SearchParams = () =>{
    //const location = "seattle, WA";
    const [location,setLocation]=useState("");
    const [animal, setAnimal]=useState("");
    const [breed,setBreed]=useState("");
    const breeds = ["Poodle","Bichon"];
    
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
        </div>
        )
}

export default SearchParams;