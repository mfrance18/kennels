import { useState, useEffect } from "react";
import {EmployeeCard } from "../Employees/Employee"
import { getAllEmployees, AllEmployees } from "../../modules/EmployeeManager"

export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    const getEmployees = () =>{
         getAllEmployees().then(response => {
             console.log(AllEmployees, "response")
            setEmployee(AllEmployees)
        })
    }
    
    useEffect(() =>{
        getEmployees()
    }, [])


    return (

        <div className="container-cards">
            {employee?.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    )
}