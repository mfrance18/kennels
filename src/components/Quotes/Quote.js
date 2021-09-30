import React, {useState, useEffect} from "react";
import { getAllQuotes } from "../../modules/QuoteManager";

export const QuoteCard = () => {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote]  = useState({})

const getQuotes = () => {
    return getAllQuotes().then(response => {
        setQuotes(response)
    })
}

const pickQuote = () => {
    const random = Math.floor(Math.random()*quotes.length)
    setQuote(quotes[random] || {})
}

useEffect(() => {
    getQuotes()},[])

useEffect(() => {
    pickQuote();
}, [quotes])

    return(
    <section className="quote">
        <h4>"{quote.text}"</h4>
        <h5>-{quote.author}</h5>
        <button onClick={(pickQuote)}>New Quote</button>
    </section>
    )}


