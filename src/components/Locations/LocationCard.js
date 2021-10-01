import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location, handleDeleteLocation }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <button onClick={() => handleDeleteLocation(location.id)}>Delete</button>
        <Link to={`/locations/${location.id}`}>
            <button>Details</button>
        </Link>
    </section>
)