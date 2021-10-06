import React, {useState} from "react"
import { DateFormat } from "./Date"
import { QuoteCard } from "./Quotes/Quote"


export const GetUser = () => {
  let user = sessionStorage.getItem("user_name")

  if (user){
  return  (
    <div>
    <h2>Welcome, {user}!</h2>
    <DateFormat />
  </div>
  )
  } else {
    return (
    <h2>Please Login</h2>
    )
  }

}

export const PropsAndState = () => {

  return (
    <>
      
      <QuoteCard />

    </>
  )
}