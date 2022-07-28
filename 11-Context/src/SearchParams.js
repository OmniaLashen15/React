import { useState, useEffect , useContext} from "react"; // useState&useEffect are hook 
import useBreedList from "./useBreedList"; // custom hook
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const Animals = ["bird","cat","dog","rabbit","reptile"];

const SearchParams = () =>{
    //const location = "seattle, WA";
    const [location,setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed,setBreed] = useState("");
    //const breeds = [];
    const [breeds]=useBreedList(animal);
    const [pets,setPets] = useState([]); // it renders first with no data then it renders for the second time with the data from api
    const [theme,setTheme] = useContext(ThemeContext)

    useEffect(() => {  //allows developers to do asynchronous actions, to make an API request when the application first renders.
        requestPets();  //called once after the app is rendered the first time
    }, []) // eslint-disable-line react-hooks/exhaustive-deps  
                   // this leds to prevent it from giving any error
    
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
            <form  
            onSubmit={e => {  //When a user hits enter or clicks the submit button it searches for animals by listening for submit events on the form.
                e.preventDefault();
                requestPets();
            }}>
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
                <label htmlFor="theme">
                    Theme
                    <select
                    value={theme}
                    onChange={(e)=> setTheme(e.target.value) }
                    onBlur={(e)=> setTheme(e.target.value) }
                     >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="#fo6d86">Fog Dog</option>
                    
                    </select>
                </label>
                {/* the two curly braces here are for :  the first for writing javascript code and the the second for the object */}
                <button style={ {backgroundColor: theme} }>Submit</button>
            </form>
            <Results pets={pets}/>        
        </div>
        )
}

export default SearchParams;