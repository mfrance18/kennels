const remoteURL = "http://localhost:5002"


export const getAllEmployees = () => {
   return fetch(`${remoteURL}/employees?_expand=location`)
    .then(res => res.json())

}
export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const addEmployee = (newEmployee) => {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }).then(response => response.json())
  }
