import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <div className={"max-w-md"}>
            {children}
        </div>
    )
}