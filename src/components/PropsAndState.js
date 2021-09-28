import React, {useState} from "react"
import { dateFormat } from "./Helper"



export const PropsAndState = ({ myUser }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

  return (
    <>
      <h3>Welcome, {myUser.name} and {myUser.pet} </h3>
      <p>Today is {dateFormat()}</p>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}