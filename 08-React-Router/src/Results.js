import Pet from "./Pet";

const Results = ({pets}) =>{ 
    return (
        <div>
            {!pets.length ? (
                    <h1>No Pets Found</h1>
                ) : (
                    pets.map(pet => (
                            <Pet 
                            name={pet.name} 
                            animal={pet.animal} 
                            breed={pet.breed} 
                            key={pet.id}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                            />     // if this key is the id of database it's not good to use key 
                                        // as if two element swapped there id will not be swapped
                        ))
                )}           
        </div>
    );
};

export default Results;