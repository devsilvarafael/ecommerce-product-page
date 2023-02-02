import { Fragment } from "react";

type ProductInfoProps = {
    title: string;
    description: string
}

export const ProductInfo = ({ title, description }: ProductInfoProps) => {
    return (
        <Fragment>
            <p className={"uppercase text-sm text-orange font-extrabold tracking-widest"}>Sneaker Company</p>
            <h2 className={"text-3xl md:text-5xl font-bold mt-4 mb-4 md:mb-12 max-w-xl"}>{title}</h2>
            <p className={"mb-8 text-dark-grayish-blue max-w-lg"}>
                {description}
            </p>
        </Fragment>
    )
}