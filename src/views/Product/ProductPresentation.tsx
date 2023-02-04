// React imports
import { useState } from "react";

// Components imports
import {
    Button, BuyProductWrapper,
    Carousel, InputAmount, Modal,
    ProductContainerWrapper,
    ProductInfo,
    ProductHero,
    ProductPrice,
    ProductThumbnails
} from "@core/components"

// Hooks and Data imports
import { productImageExtended, productImageThumbnail } from "@core/data/imagesURL";
import useCart from "@core/hooks/useCart";
import productsList from "@core/data/products.json"

// React-icons imports
import { BsCart3 } from "react-icons/bs";
import useWindowSize from "@core/hooks/useWindowSize";
import { ProductHeroWrapper } from "@core/components/Product/ProductHeroWrapper";
import { ProductInfoWrapper } from "@core/components/Product/ProductInfoWrapper";
import priceWithDiscount from "@core/utils/priceWithDiscount";
export const ProductPresentation = () => {
    // States
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Product for testing.
    const product = {
        ...productsList,
        discount: 59
    }

    const productWithDiscount = {
        ...product,
        price: priceWithDiscount(product.price, product.discount)
    }

    // Variables
    const productImagesAmount = product.images.extended.length;
    const { width } = useWindowSize();
    const { addProductToCart } = useCart();

    // Handlers
    const handleChangeMainImage = (index: number) => {
        setCurrentItemIndex(index);
    }
    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <ProductContainerWrapper>
            <ProductHeroWrapper>
                <ProductHero url={product.images.extended[currentItemIndex]} width={"md"}/>
                <ProductThumbnails
                    images={product.images.thumbnail}
                    selected={currentItemIndex}
                    changeImage={handleChangeMainImage}
                    full
                />
            </ProductHeroWrapper>

            <ProductInfoWrapper>
                <ProductInfo title={product.title} description={product.description} />
                <ProductPrice price={product.price} sale={product.discount} />

                <BuyProductWrapper>
                    <InputAmount />
                    <Button icon={<BsCart3 className={"mr-4"}/>} onClick={() => addProductToCart(productWithDiscount)}>Add to cart</Button>
                </BuyProductWrapper>
            </ProductInfoWrapper>

            {modalIsOpen &&
                <Modal open={handleModalIsOpen} actions={{ currentItemIndex, setCurrentItemIndex, productImagesAmount }}>
                    <ProductHero url={product.images.extended[currentItemIndex]} width={"lg"}/>
                    <ProductThumbnails
                        images={product.images.thumbnail}
                        selected={currentItemIndex}
                        changeImage={handleChangeMainImage}
                    />
                </Modal>
            }
        </ProductContainerWrapper>
    )
}