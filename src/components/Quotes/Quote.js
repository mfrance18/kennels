import React, { useState, useEffect } from "react";
import { getAllQuotes } from "../../modules/QuoteManager";

export const QuoteCard = () => {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({})

    const getQuotes = () => {
        return getAllQuotes().then(response => {
            setQuotes(response)
        })
    }

    const pickQuote = () => {
        const random = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[random] || {})
    }

    useEffect(() => {
        getQuotes()
    }, [])

    useEffect(() => {
        pickQuote();
    }, [quotes])

    return (
        <>
            
                <div className="quote">
                    <h2>Quote of the Day</h2>
                    <h4><i>"{quote.text}"</i></h4>
                    
                   {quote.author? <h5>"{quote.author}"</h5> : <h5>-Anonymous</h5>}
                    
                </div>
                <div>
                <button className="newQuote" onClick={(pickQuote)}>Show New Quote</button>
                </div>
           
        </>
    )
}


