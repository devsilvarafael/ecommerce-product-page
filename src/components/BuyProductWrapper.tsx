import { ReactNode } from "react";

export const BuyProductWrapper = ({ children } : { children: ReactNode}) => {
    return (
        <div className={"flex flex-row w-full space-x-5 max-w-lg"}>
            {children}
        </div>
    )
}