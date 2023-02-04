import priceWithDiscount from "@core/utils/priceWithDiscount";
import formatPrice from "@core/utils/formatPrice";

type ProductPrice = {
    price: number;
    discount?: number;
}

export const ProductPrice = ({ price, discount }: ProductPrice) => {
    const discountedValue = discount && priceWithDiscount(price, discount);

    return (
        <div className={"flex flex-row md:flex-col items-start justify-between"}>
            <p className={"text-2xl md:text-3xl font-semibold flex mb-2"}>
                {formatPrice(discountedValue || price)}
                {discount &&
                    <span
                        className={"flex items-center ml-6 text-lg font-semibold bg-pale-orange text-center text-orange px-1.5 rounded-md"}>
                        {discount}%
                    </span>
                }
            </p>
            <p className={"text-grayish-blue font-bold line-through"}>
                {formatPrice(price)}
            </p>
        </div>
    )
}