import { ReactNode } from "react";

export const ProductHeroWrapper = ({ children }: { children: ReactNode}) => {
    return (
        <div className={"md:max-w-md mb-4 mt-6 md:mt-0"}>
            {children}
        </div>
    )
}