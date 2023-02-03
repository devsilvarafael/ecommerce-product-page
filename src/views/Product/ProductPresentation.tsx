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

// Another imports
import { productImageExtended, productImageThumbnail } from "@core/data/imagesURL";
import useCart from "@core/hooks/useCart";
import productsList from "@core/data/products.json"

// React-icons imports
import { BsCart3 } from "react-icons/bs";
import useWindowSize from "@core/hooks/useWindowSize";
export const ProductPresentation = () => {
    // States
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Variables
    const productImagesAmount = productImageExtended.length;
    const { width } = useWindowSize();
    const { cartItems, addProductToCart } = useCart();
    const { id, title, description, price, images } = productsList;

    // Handlers
    const handleChangeMainImage = (index: number) => {
        setCurrentItemIndex(index);
    }
    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <ProductContainerWrapper>
            <div className={"md:max-w-lg mb-4"}>
                <ProductHero
                    url={images.extended[currentItemIndex]}
                    openOnScreen={handleModalIsOpen}
                    width={"md"}
                />

                {width > 375 ? (
                    <ProductThumbnails
                        images={images.thumbnail}
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
            </div>

            <div className={"p-4"}>
                <ProductInfo
                    title={title}
                    description={description}
                />

                <ProductPrice
                    price={price}
                    sale={25}
                />

                <BuyProductWrapper>
                    <InputAmount/>
                    <Button icon={<BsCart3 className={"mr-4"}/>} onClick={() => addProductToCart({ id, title, description, price, images })}>
                        Add to cart
                    </Button>
                </BuyProductWrapper>
            </div>

            {modalIsOpen &&
                <Modal open={handleModalIsOpen} actions={{ currentItemIndex, setCurrentItemIndex, productImagesAmount }}>
                    <ProductHero url={images.extended[currentItemIndex]} width={"lg"}/>
                    <ProductThumbnails
                        images={images.thumbnail}
                        selected={currentItemIndex}
                        changeImage={handleChangeMainImage}
                    />
                </Modal>
            }
        </ProductContainerWrapper>
    )
}