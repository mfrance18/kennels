const remoteURL = "http://localhost:5002"

export const getAllLocations = () =>{
    return fetch(`${remoteURL}/locations`)
    .then(response => response.json())
}

export const getLocationById = (locationId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/locations/${locationId}`)
    .then(res => res.json())
  }

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const addLocation = (newLocation) => {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(response => response.json())
  }