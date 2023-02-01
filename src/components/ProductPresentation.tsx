// React imports
import { useState } from "react";

// Components imports
import { Modal } from "./Modal";
import { ProductContainerWrapper } from "./ProductContainerWrapper";
import { ProductMainImage } from "./ProductMainImage";
import { ProductSubImages } from "./ProductSubImages";

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
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const productImagesAmount = productImageExtended.length;


    const handleChangeMainImage = (index: number) => {
        setCurrentItemIndex(index);
    }
    const handleModalIsOpen = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <ProductContainerWrapper>
            <ProductMainImage url={productImageExtended[currentItemIndex]} openOnScreen={handleModalIsOpen}/>

            <ProductSubImages
                images={productImageThumbnail}
                selected={currentItemIndex}
                changeImage={handleChangeMainImage}
                full
            />

            {modalIsOpen &&
                <Modal open={handleModalIsOpen} actions={{ currentItemIndex, setCurrentItemIndex, productImagesAmount }}>
                    <ProductMainImage url={productImageExtended[currentItemIndex]}/>
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