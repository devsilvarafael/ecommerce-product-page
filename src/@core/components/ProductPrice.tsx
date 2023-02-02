type ProductPrice = {
    price: number;
    sale?: number;
}

export const ProductPrice = ({ price, sale }: ProductPrice) => {
    const priceWithDiscount = (price: number, sale: number) => {
        return price - (price * (sale / 100))
    }

    const discountedValue = sale && priceWithDiscount(price, sale);

    return (
        <div className={"flex flex-row md:flex-col items-start justify-between"}>
            <p className={"text-2xl md:text-3xl font-semibold flex mb-2"}>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(discountedValue || price)}
                {sale &&
                    <span
                        className={"flex items-center ml-6 text-lg font-semibold bg-pale-orange text-center text-orange px-1.5 rounded-md"}>
                        {sale}%
                    </span>
                }
            </p>
            <p className={"text-grayish-blue font-bold line-through"}>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(price)}
            </p>
        </div>
    )
}