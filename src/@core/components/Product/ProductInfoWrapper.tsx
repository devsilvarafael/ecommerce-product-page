import { ReactNode } from "react";

export const ProductInfoWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className={"p-4"}>
            {children}
        </div>
    )
}