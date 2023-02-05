import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ProductContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <main className={"flex flex-col md:flex-row px-12 items-start justify-between mt-[90px] space-x-[10.5%]"}>
            {children}
        </main>
    )
}