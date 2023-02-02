import { ReactNode } from "react";

export const BuyProductWrapper = ({ children } : { children: ReactNode}) => {
    return (
        <div className={"flex flex-col md:flex-row w-full md:space-x-5 max-w-lg mt-8"}>
            {children}
        </div>
    )
}