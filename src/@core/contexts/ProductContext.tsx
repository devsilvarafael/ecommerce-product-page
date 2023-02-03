import { createContext, ReactNode, useState } from "react";
import { Product } from "@core/types/Product";

type CartProductsData = {
    cartItems: Product[];
    addProductToCart: (item: Product) => void;
}

export const ProductContext = createContext<CartProductsData>({} as CartProductsData);

export const ProductContextWrapper = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([])

    function addProductToCart(product: Product) {
        const { id } = product;
        const updatedCart = [...cartItems]
        const isNewProduct = updatedCart.find(product => product.id === id)

        if(!isNewProduct) {
            setCartItems([...cartItems, product])
        }
    }

    return (
        <ProductContext.Provider value={{ cartItems, addProductToCart }}>
            {children}
        </ProductContext.Provider>
    )
}
