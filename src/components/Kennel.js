import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

const isAdmin = true

const myUser = {
    name: "Matt",
    pet: "Max"
}

export const Kennel = () => (
    //this <> is called a react fragment, acts as a <div>
    <>
        <NavBar />
        <ApplicationViews isAdmin={isAdmin} myUser={myUser} />
    </>
)