import { Component } from "react";

class Carousel extends Component{
  /// old way for handling events
  // constructor(props){
  //   super(props);

  //   this.handleIndexClick = this.handleIndexClick.bind(this);
  // }
    state = {
      active:0
    };

    // to make all carousels share one default props
    static defaultProps = {  //???
      images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };


  // arrow function is the new way
  handleIndexClick = (event) => {  // handleIndexClick is class property
    //console.log(this);
    this.setState({
      active: +event.target.dataset.index // +(unary plus) to convert from string to int
    }); 
  };


  render() {
    const { active } = this.state;
    const { images } = this.props;  //???
    console.log(this.props)
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
console.log(Carousel.defaultProps)
export default Carousel;