import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ProductContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <main className={"flex flex-col md:p-0 md:flex-row md:justify-center items-center md:mt-20"}>
            {children}
        </main>
    )
}