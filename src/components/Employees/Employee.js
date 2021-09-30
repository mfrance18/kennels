import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => {
    return (
        <section className="employee" alt="Employee" >
            <h3 className="employee__name">{employee.name} </h3>
            <div className="employee__location">100 Infinity Lane</div>
        </section>
    )
}