export const getAllQuotes = () => {
    return fetch(`https://type.fit/api/quotes`)
    .then(response => response.json())
}