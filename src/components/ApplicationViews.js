import React from "react"
import { Route } from "react-router-dom"
import { useState } from "react"
import { Home } from "../Home"
import { LocationList } from "./Locations/LocationList"
import { LocationDetail } from "./Locations/LocationDetail"
import { LocationForm } from "./Locations/LocationForm"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeForm } from "./Employees/EmployeeForm"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { CustomerForm } from "./Customer/CustomerForm"
import { Redirect } from "react-router"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = ({ isAdmin, myUser }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }


  return (

    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home isAdmin={isAdmin} myUser={myUser} />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
      </Route>

      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      <Route exact path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>
      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

      <Route exact path="/animals/create">
        <AnimalForm />
      </Route>

      <Route exact path="/animals/:animalId(\d+)/edit">
        {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
      </Route>


      <Route exact path="/employees">
        <EmployeeList />
      </Route>

      <Route path="/employees/create">
        <EmployeeForm />
      </Route>

      <Route exact path="/locations">
        <LocationList />
      </Route>

      <Route path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>

      <Route path="/locations/create">
        <LocationForm />
      </Route>

      <Route exact path="/customers">
        <CustomerList />
      </Route>

      <Route path="/customers/create">
        <CustomerForm />
      </Route>
    </>
  )
}