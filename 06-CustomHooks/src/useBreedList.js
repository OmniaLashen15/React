import { useState, useEffect } from "react";

const localCache = {};   // for not returning back ti the api 

// whenever animal changes, it we be requested
export default function useBreedList(animal){
    const [breedList, setBreedList] = useState([]);
    // for checking the components which are pending, loaded, unloaded, having error, or working
    const [status,setStatus] = useState("unloaded");  

     /// never making this just for tracking the status
    // useEffect(()=>{
    //     alert(status);
    // },[status]);
    
    useEffect(() => {
        if(!animal){
           setBreedList([]); 
        }
        else if(localCache[animal]){
           setBreedList(localCache[animal]); 
        }
        // not in the local cache
        else{
            requestBreedList();
        }

        async function requestBreedList(){
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )

            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    },[animal]) // to rerun this method every time animal changes

    return [breedList,status];
}