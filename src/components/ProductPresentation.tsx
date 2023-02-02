// React imports
import { useState } from "react";

// Components imports
import { Modal } from "./Modal";
import { ProductContainerWrapper } from "./ProductContainerWrapper";
import { ProductMainImage } from "./ProductMainImage";
import { ProductSubImages } from "./ProductSubImages";
import { ProductInfo } from "./ProductInfo";
import { ProductPrice } from "./ProductPrice";
import { BuyProductWrapper } from "./BuyProductWrapper";
import { InputAmount } from "./InputAmount";
import { Button } from "./Button";
import { Carousel } from "./Carousel";

// React-icons imports
import { BsCart3 } from "react-icons/bs";
import useWindowSize from "../hooks/useWindowSize";

const productImageThumbnail = [
    "/src/assets/images/image-product-1-thumbnail.jpg",
    "/src/assets/images/image-product-2-thumbnail.jpg",
    "/src/assets/images/image-product-3-thumbnail.jpg",
    "/src/assets/images/image-product-4-thumbnail.jpg"
]

const productImageExtended = [
    "/src/assets/images/image-product-1.jpg",
    "/src/assets/images/image-product-2.jpg",
    "/src/assets/images/image-product-3.jpg",
    "/src/assets/images/image-product-4.jpg"
]

export const ProductPresentation = () => {
    // States
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Variables
    const productImagesAmount = productImageExtended.length;
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
            <div className={"md:max-w-md mb-4"}>
                <ProductMainImage
                    url={productImageExtended[currentItemIndex]}
                    openOnScreen={handleModalIsOpen}
                    width={"md"}
                />

                {width > 375 ? (
                    <ProductSubImages
                        images={productImageThumbnail}
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
                    title={"Fall Limited Edition Sneakers"}
                    description={"These low-profile sneakers are your perfect casual wear companion. " +
                        "Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."}
                />

                <ProductPrice
                    price={250}
                    sale={25}
                />

                <BuyProductWrapper>
                    <InputAmount/>
                    <Button icon={<BsCart3 className={"mr-4"}/>}>
                        Add to cart
                    </Button>
                </BuyProductWrapper>
            </div>

            {modalIsOpen &&
                <Modal open={handleModalIsOpen} actions={{ currentItemIndex, setCurrentItemIndex, productImagesAmount }}>
                    <ProductMainImage url={productImageExtended[currentItemIndex]} width={"lg"}/>
                    <ProductSubImages
                        images={productImageThumbnail}
                        selected={currentItemIndex}
                        changeImage={handleChangeMainImage}
                    />
                </Modal>
            }
        </ProductContainerWrapper>
    )
}