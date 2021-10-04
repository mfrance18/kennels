import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from '../../modules/CustomerManager';
import '../animal/AnimalForm.css'

export const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        name: "",
    })

    const history = useHistory();

    const handleCancelButton = () => {
        history.push("/customers")
    }

    const handleControlledInputChange = (event) => {
        const newCustomer = { ...customer }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
        event.preventDefault()

        addCustomer(customer)
            .then(() => history.push("/customers"))
    }

    

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Customer name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleClickSaveCustomer}>
                Save Customer
            </button>

            <button className="btn btn-primary"
                onClick={handleCancelButton}>
                Cancel
            </button>
        </form>



    )
}