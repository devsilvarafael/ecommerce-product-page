import { Fragment, ReactNode } from "react";
import { Button } from "@core/components/Button";

import useCart from "@core/hooks/useCart";

import { ReactComponent as CartIcon } from "../../../public/images/icon-cart.svg";

import { ReactComponent as DeleteIcon } from "../../../public/images/icon-delete.svg";
import formatPrice from "@core/utils/formatPrice";

interface CartProps {
    isOpen: boolean;
    openCart: () => void;
}

export const Cart = ({ isOpen, openCart }: CartProps) => {
    const { cartItems, deleteCartProduct } = useCart()

    return (
        <Fragment>
            <div>
                {cartItems.length > 0 && (
                    <span
                        className={"absolute ml-2 -mt-2 md:-mt-0 md:top-10 md:mt-px bg-orange text-white w-6 h-4 flex justify-center items-center rounded-full text-sm font-bold"}
                    >
                        {cartItems.map(product => { return product.amount })}
                     </span>
                )}

                <CartIcon className={"mr-6 cursor-pointer"} onClick={openCart}/>
            </div>
            {isOpen && (
                <div
                    className={"absolute top-20 md:top-28 w-[95%] left-2 md:left-[67%] md:w-96 rounded-xl shadow-2xl bg-white z-10"}>
                    <div className={"p-6 border-b-2"}>
                        <p className={"text-very-dark-blue font-bold text-lg"}>Cart</p>
                    </div>

                    <div className={"p-4 md:p-6"}>
                        {cartItems && cartItems.map(item => (
                            <div className={"flex w-full items-center justify-between flex-row max-h-20 mb-6 text-lg"} key={item.id}>
                                <img src={item.images.thumbnail[0]} className={"w-14 h-full rounded-md"}/>
                                <div className={"text-dark-grayish-blue"}>
                                    <span>{item.title}</span>
                                    <p>
                                        {formatPrice(item.price)}

                                        <span className={"ml-1"}>
                                            x {cartItems.map(product => (
                                                <Fragment key={product.id}>
                                                    {product.amount}
                                                    <span className={"ml-2 text-very-dark-blue font-bold"}>{formatPrice(product.price * product.amount)}</span>
                                                </Fragment>
                                        ))}
                                        </span>
                                    </p>
                                </div>
                                    <DeleteIcon onClick={() => deleteCartProduct(item)} className={"cursor-pointer"} role={"Delete item"}/>
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

