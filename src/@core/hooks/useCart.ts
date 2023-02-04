import { useContext } from "react";
import { ProductContext } from "@core/contexts/ProductContext";

export default function useCart() {
    const { cartItems, addProductToCart, deleteCartProduct, amount, setAmount } = useContext(ProductContext)
    return { cartItems, addProductToCart, deleteCartProduct, amount, setAmount }
}