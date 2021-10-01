import React, { useState, useEffect } from 'react';
import { getLocationById} from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ address: ""});

  const {locationId} = useParams();
  const history = useHistory();

  const handleBack = () => {
    history.push("/locations")
  }

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          address: location.address
        });
      });
  }, [locationId]);

  return (
    <section className="location">
      <address>
          Address: {location.address}
      </address>
      <button className="backButton"  type="button"  onClick={handleBack}>
      Go Back
        </button>
    </section>
  );
}