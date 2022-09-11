import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet }) {
  return <div className="ui cards">
    {
    pets.map( pet => {
      return <Pet key={pet.id} id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} isAdopted={pet.isAdopted} onAdoptPet={onAdoptPet} />
    }

    )
    }
    </div>;
}

export default PetBrowser;
