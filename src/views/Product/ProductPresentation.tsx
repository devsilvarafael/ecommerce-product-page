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
                <ProductHero
                    url={productImageExtended[currentItemIndex]}
                    openOnScreen={handleModalIsOpen}
                    width={"md"}
                />

                {width > 375 ? (
                    <ProductThumbnails
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
                    <ProductHero url={productImageExtended[currentItemIndex]} width={"lg"}/>
                    <ProductThumbnails
                        images={productImageThumbnail}
                        selected={currentItemIndex}
                        changeImage={handleChangeMainImage}
                    />
                </Modal>
            }
        </ProductContainerWrapper>
    )
}