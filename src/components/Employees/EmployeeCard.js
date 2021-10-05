import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {

    return (
        <section className="employee" alt="Employee image">
            <img src={employee.image} />
            <h3 className="employee__name">{employee.name} </h3>
            <address className="employee__location"> {employee.location.name}</address>
            <button onClick={() => handleDeleteEmployee(employee.id)}>Fired</button>
        </section>
    )
}