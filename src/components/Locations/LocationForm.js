import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addLocation } from '../../modules/LocationManager';
import '../animal/AnimalForm.css'

export const LocationForm = () => {
    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()

    const handleCancelButton = () => {
        history.push("/locations")
    }

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newLocation[event.target.id] = selectedVal
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        addLocation(location)
            .then(() => history.push("/locations"))
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                </div>
         
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Address" value={location.address} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleClickSaveLocation}>
                Save Location
            </button>

            <button className="btn btn-primary"
                onClick={handleCancelButton}>
                Cancel
            </button>
        </form>

    )

}