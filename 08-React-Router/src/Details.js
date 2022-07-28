import { useParams } from "react-router-dom"; // for using the id

const Details = () =>{
    const {id} = useParams();
    return <h2>{id}</h2>
};

export default Details;