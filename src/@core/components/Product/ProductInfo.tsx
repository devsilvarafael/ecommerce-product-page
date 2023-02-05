import { Fragment } from "react";

type ProductInfoProps = {
    title: string;
    description: string
}

export const ProductInfo = ({ title, description }: ProductInfoProps) => {
    return (
        <section className={"mt-10"}>
            <p className={"uppercase text-sm text-orange font-extrabold tracking-widest mb-4"}>Sneaker Company</p>
            <h1 className={"text-3xl md:text-[43px] tracking-wide leading-tight font-extrabold max-w-xl mb-7"}>{title}</h1>
            <p className={"text-dark-grayish-blue tracking-wide max-w-lg mb-7"}>
                {description}
            </p>
        </section>
    )
}