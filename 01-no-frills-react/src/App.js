const Pet = (props) => {  //Pet component
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};


const App = () => {
    return React.createElement(  //render function
        "div",
        {},
        [
            React.createElement("h1", { id: "brand" }, "Adopt Me!"),
            React.createElement(Pet,{
                name:"Luna",
                animal:"Dog",
                breed:"Havanese"
            }),
            React.createElement(Pet,{
                name:"Pepper",
                animal:"Bird",
                breed:"Cockatiel"
            }),
            React.createElement(Pet,{
                name:"Doink",
                animal:"Cat",
                breed:"Mix"
            }),
        ]
    );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
