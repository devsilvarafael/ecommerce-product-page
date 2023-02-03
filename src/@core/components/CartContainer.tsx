import { Fragment, ReactNode } from "react";
import { Button } from "@core/components/Button";

import useCart from "@core/hooks/useCart";

export const CartContainer = () => {
    const { cartItems } = useCart()

    return (
        <div className={"absolute top-20 md:top-28 w-[95%] left-2 md:left-2/3 md:w-96 rounded-xl shadow-2xl bg-white z-50"}>
            <div className={"p-6 border-b-2"}>
                <p className={"text-very-dark-blue font-bold text-lg"}>Cart</p>
            </div>

            <div className={"p-6"}>
                    {cartItems && cartItems.map(item => (
                        <div className={"flex w-full flex-row max-h-20 mb-6"} key={item.id}>
                            <img src={item.images.thumbnail[0]} className={"w-14 h-full rounded-md"}/>
                            <div className={"ml-4 text-dark-grayish-blue"}>
                                <span className={""}>{item.title}</span>
                                <p>
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(item.price)}
                                </p>
                            </div>
                        </div>
                    ))}
                {cartItems.length > 0 ? (
                    <Button>Checkout</Button>
                ) :
                    <div className={"w-full h-full flex items center justify-center py-14 text-dark-grayish-blue font-bold"}>
                        <p>Your cart is empty.</p>
                    </div>

                }
            </div>
        </div>
    )
}

