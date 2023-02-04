import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Product } from "@core/types/Product";

type CartProductsData = {
    cartItems: Product[];
    addProductToCart: (item: Product) => void;
    deleteCartProduct: (item: any) => void;
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>
}

export const ProductContext = createContext<CartProductsData>({} as CartProductsData);

export const ProductContextWrapper = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [amount, setAmount] = useState<number>(0);
    function addProductToCart(product: Product) {
        try {
            const { id } = product;
            const updatedCart = [...cartItems]
            const isNewProduct = updatedCart.find(product => product.id === id)

            if(!isNewProduct) {
                setCartItems([...cartItems, product])
            }
        } catch (err) {
            throw new Error("Error on add this product to cart" + err);
        }

    }

    function deleteCartProduct(product: Product) {
        try {
            const { id } = product;
            const updatedCart = [...cartItems];
            const deletedProduct = updatedCart.findIndex(product => product.id === id);

            updatedCart.splice(deletedProduct, 1);

            setCartItems(updatedCart)
        } catch (err) {
            throw new Error('Error on delete this product' + err);
        }
    }

    return (
        <ProductContext.Provider value={{ cartItems, addProductToCart, deleteCartProduct, amount, setAmount }}>
            {children}
        </ProductContext.Provider>
    )
}
