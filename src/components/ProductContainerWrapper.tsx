import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ProductContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <div className={"w-full flex flex-col md:h-screen md:p-0 md:flex-row justify-evenly items-center md:-mt-16"}>
            {children}
        </div>
    )
}