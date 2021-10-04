const remoteURL = "http://localhost:5002"

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(res => res.json())
  }

  export const deleteCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const addCustomer = (newCustomer) => {
    return fetch(`${remoteURL}/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCustomer)
    }).then(response => response.json())
  }