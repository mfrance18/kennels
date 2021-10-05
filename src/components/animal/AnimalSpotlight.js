import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";
import { firstLetterCase } from "../../modules/helpers";

export const AnimalSpotlight = ({animalId}) => {
  const [animal, setAnimal] = useState({name:"", breed: ""});

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, [animalId]);

  return (
    <div className="animal-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{firstLetterCase(animal.name)}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};