import { useState, useEffect } from "react";
import { EmployeeCard } from "../Employees/EmployeeCard"
import { getAllEmployees, AllEmployees, deleteEmployee } from "../../modules/EmployeeManager"


export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    const getEmployees = () => {
        getAllEmployees().then(response => {
            setEmployee(response)
        })
    }

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
            .then(() =>
                getAllEmployees()
                    .then(setEmployee))
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="container-cards">
            {employee.map(employee => <EmployeeCard
                key={employee.id}
                employee={employee}
                handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
    )

}



// export const EmployeeList = () => {
//     const [employee, setEmployee] = useState([])

//     const getEmployees = () => {
//         getAllEmployees().then(response => {
//             setEmployee(AllEmployees)
//             console.log(AllEmployees)
//         })
//     }

//     const handleDeleteEmployee = (id) => {
//         deleteEmployee(id)
//             .then(() =>
//                 getAllEmployees()
//                     .then(setEmployee))
//     }

//     useEffect(() => {
//         getEmployees()
//     }, [])


//     return (

//         <div className="container-cards">
//             {employee?.map(employee => <EmployeeCard
//                 key={employee.id}
//                 employee={employee}
//                 handleDeleteEmployee={handleDeleteEmployee} />)}
//         </div>


//     )
// }