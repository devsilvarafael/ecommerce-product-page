type ProductSubImageProps = {
    images: string[];
    selected: number;
    changeImage: (index: number) => void;
    full?: boolean;
}

export const ProductThumbnails = ({ images, selected, changeImage, full }: ProductSubImageProps) => {
    return (
        <div className={`flex flex-row justify-between mt-10 ${full ? "px-0": "px-8"}`}>
            {images.map((thumbnail, index) => (
                <figure
                    className={`
                        ${selected === index && "outline outline-3 outline-orange rounded-xl bg-white"} 
                        rounded-xl hover:bg-white`}
                    key={index}
                >
                    <img
                        src={thumbnail}
                        alt={"product image"}
                        className={`${selected === index && "opacity-50"} rounded-xl w-24 cursor-pointer hover:opacity-50`}
                        onClick={() => changeImage(index)}
                    />
                </figure>
            ))}
        </div>
    )
}