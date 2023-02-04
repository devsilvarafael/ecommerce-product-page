import { ReactNode, useState } from "react";
import { InputAmount } from "@core/components/InputAmount";
import { Button } from "@core/components/Button";
import { BsCart3 } from "react-icons/bs";
import useCart from "@core/hooks/useCart";
import { Product } from "@core/types/Product";

export const BuyProductAction = (product: Product) => {
    const { addProductToCart } = useCart();
    const [amount, setAmount] = useState(0)

    return (
        <div className={"flex flex-col md:flex-row w-full md:space-x-5 max-w-lg mt-8"}>
            <InputAmount amount={amount} setAmount={setAmount} />
            <Button icon={<BsCart3 className={"mr-4"}/>} onClick={() => addProductToCart(product)}>Add to cart</Button>
        </div>
    )
}