import { useState, useEffect } from "react";
import { LocationCard } from "./Location";
import { getAllLocations } from "../../modules/LocationManager";

export const LocationList = () =>{
    const [location, setLocation] = useState([])
    
    const getLocations = () => {
        return getAllLocations().then(response => {
         setLocation(response)
        })
    }   
    useEffect(() =>{
        getLocations()
    }, [])

    return(
        <div>
            {location.map(location => <LocationCard key={location.id} location={location}/>)}
        </div>
    )
}