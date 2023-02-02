import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ProductContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <div className={"flex flex-col md:p-0 md:flex-row md:justify-evenly items-center md:mt-20"}>
            {children}
        </div>
    )
}