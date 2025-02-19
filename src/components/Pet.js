import React, { useState } from "react";

function Pet({ id, name, type, age, weight, gender, isAdopted,  onAdoptPet }) {
  const [adoptedStatus , setAdoptedStatus] = useState(isAdopted)

  function handleClick() {
    setAdoptedStatus(true)
    onAdoptPet(id)
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {
           gender === "male" ? '♂' : '♀' 
          
          /* OR  */}
          { name }
        </span>
        <div className="meta">
          <span className="date">{ type }</span>
        </div>
        <div className="description">
          <p>Age: { age }</p>
          <p>Weight: { weight }</p>
        </div>
      </div>
      <div className="extra content">

        { adoptedStatus ? 
        <button className="ui disabled button">Already adopted</button> :         
        <button onClick={handleClick} className="ui primary button">Adopt pet</button>
 }
        
      </div>
    </div>
  );
}

export default Pet;
