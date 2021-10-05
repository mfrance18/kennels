import React, {useState} from "react"
import { useEffect } from "react/cjs/react.development"
import { DateFormat } from "./Date"
import { QuoteCard } from "./Quotes/Quote"


const GetUser = () => {
  let user = sessionStorage.getItem("user_name")
  
  return (
    <div>
    <h2>Welcome, {user}!</h2>
  </div>
  )
}

export const PropsAndState = ({  }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

  return (
    <>
      <DateFormat/>
      <GetUser />
      <QuoteCard />
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}