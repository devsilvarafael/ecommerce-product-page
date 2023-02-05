import useWindowSize from "@core/hooks/useWindowSize";

type ProductMainImageProps = {
    url: string;
    openOnScreen?: () => void;
    width: "lg" | "md"
}

export const ProductHero = ({ url, openOnScreen, width }: ProductMainImageProps) => {
    const { width: screenWidth } = useWindowSize()

    return (
        <aside className={"md:min-w-full md:min-w-[500px]"}>
            <img
                src={url}
                alt={"Product Hero Image"}
                className={`${width === "lg" ? "max-w-2xl" : "md:max-w-md"} md:rounded-2xl md:cursor-pointer hover:shadow-md hover:transition`}
                onClick={screenWidth > 1000 ? openOnScreen : undefined}
            />
        </aside>
    )
}