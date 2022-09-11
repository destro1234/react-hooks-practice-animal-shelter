import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChange(type) {
    setFilters({type: `${type}`})
  }

  function handleFindPets() {

    let url = "http://localhost:3001/pets"

    if (filters.type !== "all") {
      url = url + `?type=${filters.type}`
    } 
      fetch(url)
      .then(r => r.json())
      .then(data => setPets(data))
    }

    function handleAdopt(petId) {
      const adoptedPet = pets.find( pet => pet.id === petId)
      
      console.log(adoptedPet)
    }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChange} onFindPetsClick={handleFindPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdopt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
