// React imports
import { useState } from "react";

// Components imports
import {
    Button, BuyProduct,
    Carousel, InputAmount, Modal,
    ProductContainerWrapper,
    ProductInfo,
    ProductHero,
    ProductPrice,
    ProductThumbnails
} from "@core/components"

// Hooks and Data imports
import productsList from "@core/data/products.json"

// React-icons imports
import { ProductHeroWrapper } from "@core/components/Product/ProductHeroWrapper";
import { ProductInfoWrapper } from "@core/components/Product/ProductInfoWrapper";
import priceWithDiscount from "@core/utils/priceWithDiscount";
import useWindowSize from "@core/hooks/useWindowSize";
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
                <ProductHero
                    url={product.images.extended[currentItemIndex]}
                    openOnScreen={handleModalIsOpen}
                    width={"md"}
                />

                {width > 375 ? (
                    <ProductThumbnails
                        images={product.images.thumbnail}
                        selected={currentItemIndex}
                        changeImage={handleChangeMainImage}
                        full
                    />
                ) : (
                    <Carousel
                        actions={{ currentItemIndex, setCurrentItemIndex, productImagesAmount }}
                        position={{ leftArrow: "left-4", rightArrow: "right-4" }}
                    />
                )}

            </ProductHeroWrapper>

            <ProductInfoWrapper>
                <ProductInfo title={product.title} description={product.description} />
                <ProductPrice price={product.price} discount={product.discount} />

                <BuyProduct  product={productWithDiscount}/>
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