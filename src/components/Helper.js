export const dateFormat = () => {
    const newDate = new Date();
    const dateToString = newDate.toString(); 
    const dateFormat = dateToString.substring(0, 16); 
    return dateFormat;
}