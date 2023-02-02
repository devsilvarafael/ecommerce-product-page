import useWindowSize from "@core/hooks/useWindowSize";

type ProductMainImageProps = {
    url: string;
    openOnScreen?: any;
    width: "lg" | "md"
}

export const ProductMainImage = ({ url, openOnScreen, width }: ProductMainImageProps) => {
    const { width: screenWidth } = useWindowSize()

    return (
        <div className={"min-w-full md:min-w-[500px] min-h-[375px]"}>
            <img
                src={url}
                alt={"Product Image"}
                className={`${width === "lg" ? "max-w-xl" : "max-w-md"} md:rounded-2xl md:cursor-pointer`}
                onClick={screenWidth > 400 ? openOnScreen : null}
            />
        </div>
    )
}