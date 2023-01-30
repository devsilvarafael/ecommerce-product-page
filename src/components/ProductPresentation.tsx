import {ProductInfo} from "./ProductInfo";

import {useState} from "react";

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
    const [mainProductImage, setMainProductImage] = useState(0);
    const handleChangeMainImage = (index: number) => {
        setMainProductImage(index);
    }


    return (
            <div className={"max-w-xl"}>
                <img src={productImageExtended[mainProductImage]} className={"rounded-2xl"} />

                <div className={"flex flex-row px-7 justify-between mt-10"}>
                    {productImageThumbnail.map((thumbnail, index) => (
                        <figure className={`${mainProductImage === index && "outline outline-2 outline-orange rounded-xl"}`}>
                            <img
                                src={thumbnail}
                                alt={"product image"}
                                className={`rounded-xl ${mainProductImage === index && ""} h-24`}
                                onClick={() => handleChangeMainImage(index)}
                            />
                        </figure>
                    ))}
                </div>
            </div>
    )
}