import { useState, useEffect } from "react";
import {EmployeeCard } from "../Employees/Employee"
import { getAllEmployees } from "../../modules/EmployeeManager"

export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    const getEmployees = () =>{
        return getAllEmployees().then(response => {
            setEmployee(response)
        })
    }
    useEffect(() =>{
        getEmployees()
    }, [])

    return (
        <div className="container-cards">
            {employee.map(employee => <EmployeeCard employee={employee}/>)}
        </div>
    )
}