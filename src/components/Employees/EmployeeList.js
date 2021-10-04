import { useState, useEffect } from "react";
import { EmployeeCard } from "../Employees/EmployeeCard"
import { getAllEmployees, AllEmployees, deleteEmployee } from "../../modules/EmployeeManager"
import { useHistory } from "react-router";


export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    const history = useHistory()

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
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/employees/create") }}>
                    Add Employee
                </button>
            </section>

            <div className="container-cards">
                {employee.map(employee => <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    handleDeleteEmployee={handleDeleteEmployee} />)}
            </div>
        </>
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