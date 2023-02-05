import {ReactNode} from "react";

type ContainerWrapperProps = {
    children: ReactNode;
}

export const ProductContainerWrapper = ({ children }: ContainerWrapperProps) => {
    return (
        <main className={"flex flex-col md:flex-row md:px-12 md:items-start md:justify-evenly md:mt-[90px]"}>
            {children}
        </main>
    )
}