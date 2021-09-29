import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import {LocationList} from "./Locations/LocationList"
import {AnimalList} from "./animal/AnimalList"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"

export const ApplicationViews = ({isAdmin, myUser}) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/employees">
              <EmployeeList />
            </Route>

            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route exact path="/customers">
              <CustomerList />
            </Route>
        </>
    )
}