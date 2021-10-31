export const addM = (amount) => {
    return (dipatch) => {
        dipatch({type: "add",
        payload: amount})   
    }
}
export const subM = (amount) => {
    return (dipatch) => {
        dipatch({type: "sub",
        payload: amount})   
    }
}