import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { firstLetterCase } from "../../modules/helpers"

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {

const history = useHistory();


return (

    <section className="animal">
        <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <button onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
        <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
        </Link>
        <button type="button"
            onClick={() => history.push(`/animals/${animal.id}/edit`)}>
            Edit
        </button>
    </section>
)
}