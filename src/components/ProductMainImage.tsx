type ProductMainImageProps = {
    url: string;
    openOnScreen?: () => void;
}

export const ProductMainImage = ({ url, openOnScreen }: ProductMainImageProps) => {
    return <img src={url} alt={"Product Image"} className={"rounded-2xl"} onClick={openOnScreen}/>
}
