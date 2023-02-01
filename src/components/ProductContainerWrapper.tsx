import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ProductContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <div className={"max-w-md"}>
            {children}
        </div>
    )
}