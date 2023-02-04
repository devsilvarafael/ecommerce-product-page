import { Fragment, ReactNode } from "react";
import { Button } from "@core/components/Button";

import useCart from "@core/hooks/useCart";

import { ReactComponent as CartIcon } from "../../../public/images/icon-cart.svg";

interface CartProps {
    isOpen: boolean;
    openCart: () => void;
}

export const Cart = ({ isOpen, openCart }: CartProps) => {
    const { cartItems } = useCart()

    return (
        <Fragment>
            <div>
                {cartItems.length > 0 && (
                    <span
                        className={"absolute ml-2 top-10 mt-px bg-orange text-white w-6 h-4 flex justify-center items-center rounded-full text-[13px] font-bold"}
                    >
                        {cartItems.length}
                     </span>
                )}

                <CartIcon className={"mr-6 cursor-pointer"} onClick={openCart}/>
            </div>
            {isOpen && (
                <div
                    className={"absolute top-20 md:top-28 w-[95%] left-2 md:left-2/3 md:w-96 rounded-xl shadow-2xl bg-white z-10"}>
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
                            <div
                                className={"w-full h-full flex items center justify-center py-14 text-dark-grayish-blue font-bold"}>
                                <p>Your cart is empty.</p>
                            </div>

                        }
                    </div>
                </div>
            )}
        </Fragment>
    )
}

