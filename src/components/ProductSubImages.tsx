type ProductSubImageProps = {
    images: string[];
    selected: number;
    changeImage: (index: number) => void;
    full?: boolean;
}

export const ProductSubImages = ({ images, selected, changeImage, full }: ProductSubImageProps) => {
    return (
        <div className={`flex flex-row justify-between mt-10 ${full ? "px-0": "px-12"}`}>
            {images.map((thumbnail, index) => (
                <figure className={`${selected === index && "outline outline-2 outline-orange rounded-xl"}`}>
                    <img
                        src={thumbnail}
                        alt={"product image"}
                        className={`rounded-xl ${selected === index && ""} w-24  cursor-pointer`}
                        onClick={() => changeImage(index)}
                    />
                </figure>
            ))}
        </div>
    )
}