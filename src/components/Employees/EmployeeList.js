import { useState, useEffect } from "react";
import { EmployeeCard } from "../Employees/Employee"
import { getAllEmployees} from "../../modules/EmployeeManager"

export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    const getEmployees = () => {
        getAllEmployees().then(response => {
            setEmployee(response)
        }) 
    }

    useEffect(() => {
        getEmployees()
    }, [])
    
    return (
        <div>
            {employee.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
        </div>
    )

}   







// export const EmployeeList = () => {
//     const [employee, setEmployee] = useState([])

//     const getEmployees = () => {
//         getAllEmployees().then(response => {
//             console.log(employee, "response")
//             // debugger
//             setEmployee(AllEmployees)
//             console.log(employee)
//         })
//     }

//     useEffect(() => {
//         getEmployees()
//     }, [])


//     return (
//         <>
//         {
//             employee == undefined ? 
//             <div className="container-cards">
//                 {employee?.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
//             </div> : <p>waiting for text</p>
//         }
//         </>
//     )
// }