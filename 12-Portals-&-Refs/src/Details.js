import { Component } from "react";
import { useParams } from "react-router-dom"; // for using the id
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

/// Class Component
class Details extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {loading:true}
    // }

    state = {loading:true, showModal: false};    ///clas property


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
    toggleModal = () => this.setState({showModal: !this.state.showModal});
    render(){
        //console.log("state",this.state)
        //console.log("prpos",this.props)

        if (this.state.loading){
        return <h2>loading ...</h2>
    }
    
    //throw new Error('lmao your crashed !');
    
    const { animal, breed, city, state, description, name, images, showModal} = this.state;
    
    return (
        <div className="details">
            <Carousel images={images} />
            <div>
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {city}, {state}</h2>
                <ThemeContext.Consumer>
                    {([theme]) => (
                            <button onClick={this.toggleModal} style={{backgroundColor:theme}}>Adopt {name}</button>
                    )}
                </ThemeContext.Consumer>
                <p>{description}</p>
                {
                    showModal ? (
                        <Modal toggleModal={this.toggleModal}>
                            <div>
                                <h1>Would you like to adopt {name}</h1>
                                <div className="buttons">
                                <a href="https://bit.ly/pet-adopt">Yes</a>
                                <button onClick={this.toggleModal}>No</button>
                                </div>
                            </div>
                        </Modal>
                    ): null}
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