import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addEmployee } from '../../modules/EmployeeManager';
import '../animal/AnimalForm.css'
import { getAllLocations } from '../../modules/LocationManager';

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "", 
    })

    const [locations,setLocations] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newEmployee = { ...employee }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
	
		newEmployee[event.target.id] = selectedVal
		// update state
		setEmployee(newEmployee)
	}

    const handleCancelButton = () => {
        history.push("/employees")
    }


    useEffect(() => {
		getAllLocations().then(response => {
			setLocations(response)
		})		
	}, []);

	const handleClickSaveEmployee = (event) => {
		event.preventDefault()
        addEmployee(employee).then(() => history.push("/employees"))
    }



    return (
        <form className="animalForm">
        <h2 className="animalForm__title">New Employee</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Employee name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
            </div>
   
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>

            <button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Employee
			</button>

			<button className="btn btn-primary"
                onClick={handleCancelButton}>
                Cancel
            </button>
            </form>
    )

}