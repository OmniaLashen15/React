import { Component } from "react";
import { useParams } from "react-router-dom"; // for using the id
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

/// Class Component
class Details extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {loading:true}
    // }

    state = {loading:true}    ///clas property


    //it runs after it gets rendered to the dom for the first time  
    async componentDidMount() { // it is the same as useEnergy
        const res = await fetch (
            `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`  
        )

        const json = await res.json();
        
        //console.log("json",json.pets[0])
        //console.log("state",this.state)
        this.setState(Object.assign({loading:false}, json.pets[0]))
       
        /// equivalent ti the line above
        /*this.setState({
            loading:false
        })
        this.setState(json.pets[0])*/
    } 
// class component must have render function
    render(){
        //console.log("state",this.state)
        //console.log("prpos",this.props)

        if (this.state.loading){
        return <h2>loading ...</h2>
    }

    //throw new Error('lmao your crashed !');
    
    const { animal, breed, city, state, description, name, images} = this.state;
    
    return (
        <div className="details">
            <Carousel images={images} />
            <div>
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {city}, {state}</h2>
                <ThemeContext.Consumer>
                    {([theme]) => (
                            <button style={{backgroundColor:theme}}>Adopt {name}</button>
                    )}
                </ThemeContext.Consumer>
                <p>{description}</p>
                </div>
        </div>)
    
    }
}
const WrappedDetails = () => {
    const params = useParams();
    return (
    <ErrorBoundary>
        <Details params={params}/>
    </ErrorBoundary>
    )
}
/*
const Details = () =>{
    const {id} = useParams();
    return <h2>{id}</h2>
};
*/
export default WrappedDetails;


//export default withRouter(Details);  this is doing what wrappedDetails is doing