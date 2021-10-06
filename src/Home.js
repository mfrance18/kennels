import React, { useState, useEffect } from "react";
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight"
import { getRandomId } from "./modules/AnimalManager"
import { PropsAndState } from "./components/PropsAndState"

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
    <div className="home">
    
      <PropsAndState />
      </div>

      <div className="spotLight">
      <h1>Animal Spotlight</h1>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
      <button className="reload" onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      </div>
    </>
  );
};

