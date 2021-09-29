const remoteURL = "http://localhost:5002"
export let AllEmployees = []
export const getAllEmployees = () => {
   return fetch(`${remoteURL}/employees`)
    .then(res => res.json())
    .then(res => {
        res.map(e => {fetch(`https://randomuser.me/api?inc=name,picture`)
        .then(response => response.json())
        .then(response => {e.image=response.results[0].picture.large
            e.name = response.results[0].name.first
            })
        })
        AllEmployees = res
    
    })
}

//`https://randomuser.me/api?inc=picture`

//`${remoteURL}/employees`