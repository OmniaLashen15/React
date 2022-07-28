import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {hasError : false};

    static getDerivedStateFromError(){
        return {hasError : true,redirect:false}
    }

    componentDidCatch(error, info){
        console.error(error, info)
    }

    componentDidUpdate(){
        if(this.state.hasError)
        {
            setTimeout(() => this.setState({redirect: true}),5000);
        }
    }
    render(){
        if(this.state.redirect){
            return <Navigate to="/" />
        }
        else if(this.state.hasError){
          return (
            <h2>There was an error. Oh no. What are we going to do. JK.{" "}
                <Link to="/">Click here</Link> to go back to the homepage.
                 Or wait five seconds and we will do it for you. 
            </h2>
            )
        }

        return this,this.props.children;
    }
}
export default ErrorBoundary;