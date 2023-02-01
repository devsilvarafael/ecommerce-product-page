import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    icon?: ReactNode;
}

export const Button = ({ children, icon, ...props }: ButtonProps) => {
    return (
        <button className={"w-full bg-orange rounded-xl text-white font-bold flex justify-center items-center"} {...props}>{icon} {children}</button>
    )
}