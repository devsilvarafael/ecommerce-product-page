import useWindowSize from "@core/hooks/useWindowSize";

type ProductMainImageProps = {
    url: string;
    openOnScreen?: any;
    width: "lg" | "md"
}

export const ProductHero = ({ url, openOnScreen, width }: ProductMainImageProps) => {
    const { width: screenWidth } = useWindowSize()

    return (
        <div className={"md:min-w-full md:min-w-[500px] md:min-h-[375px]"}>
            <img
                src={url}
                alt={"Product Image"}
                className={`${width === "lg" ? "max-w-xl" : "md:max-w-md"} md:rounded-2xl md:cursor-pointer hover:shadow-md hover:transition`}
                onClick={screenWidth > 400 ? openOnScreen : null}
            />
        </div>
    )
}