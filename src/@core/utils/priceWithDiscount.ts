const priceWithDiscount = (price: number, sale: number) => {
    return price - (price * (sale / 100))
}

export default priceWithDiscount;