export const forPrice = (price) => {
    return `$${price}`
}

export const totalPrice = data => {
        let r = data.map(elem => elem.price).reduce((a,b)=> a + b,0)
        return forPrice(r.toFixed(2)) 
}