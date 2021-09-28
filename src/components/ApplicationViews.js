import React from "react"
import { Route } from "react-router-dom"
import { CustomerCard } from "./Customer/Customer"
import { EmployeeCard } from "./Employees/Employee"
import { Home } from "../Home"
import { LocationCard } from "./Locations/Location"
import { AnimalCard } from "./animal/AnimalCard"

export const ApplicationViews = ({isAdmin, myUser}) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalCard />
            </Route>

            <Route path="/employees">
              <EmployeeCard />
            </Route>

            <Route path="/locations">
              <LocationCard />
            </Route>

            <Route path="/customers">
              <CustomerCard />
            </Route>
        </>
    )
}