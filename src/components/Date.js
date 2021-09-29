export const DateFormat = () => {
    const date = new Date(Date.now()); 
    const newDate = date.toDateString();
    return <h3>Today's Date is {newDate}</h3>
}