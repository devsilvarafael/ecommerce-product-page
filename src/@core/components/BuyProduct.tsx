import { ReactNode, useState } from "react";
import { InputAmount } from "@core/components/InputAmount";
import { Button } from "@core/components/Button";
import { BsCart3 } from "react-icons/bs";
import useCart from "@core/hooks/useCart";
import { Product } from "@core/types/Product";

type BuyProduct = {
    product: Omit<Product, "amount">
}

export const BuyProduct = ({ product }: BuyProduct) => {
    const { addProductToCart, amount } = useCart();

    return (
        <div className={"flex flex-col md:flex-row w-full md:space-x-5 max-w-lg mt-8"}>
            <InputAmount />
            <Button icon={<BsCart3 className={"mr-4"}/>} onClick={() => addProductToCart({ ...product, amount: amount })}>Add to cart</Button>
        </div>
    )
}