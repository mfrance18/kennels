import React, {useState} from "react"
import { DateFormat } from "./Date"




export const PropsAndState = ({ myUser }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

  return (
    <>
      <DateFormat/>
      <h3>Welcome, {myUser.name} and {myUser.pet} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}