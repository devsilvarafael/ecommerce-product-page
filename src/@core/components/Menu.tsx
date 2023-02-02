import { ReactComponent as Logo } from "../../../public/images/logo.svg";
import { ReactComponent as CartIcon } from "../../../public/images/icon-cart.svg";

import { TfiMenu as HamburgerMenuIcon } from "react-icons/tfi";

import { Avatar } from "./Avatar";
import useWindowSize from "../hooks/useWindowSize";

const options = [
    { id: 0, label: "Collections" },
    { id: 1, label: "Men" },
    { id: 2, label: "Women" },
    { id: 3, label: "About" },
    { id: 4, label: "Contact" }
]


export const Menu = () => {
    const { width: screenWidth } = useWindowSize();

    return (
        <header className={"w-full bg-white z-40 flex justify-between p-4 md:p-0 md:pb-12 md:pt-8 mb-3 md:border-b-2"}>
            <div className={"flex flex-row items-center"}>
                {screenWidth > 600 ? null : <HamburgerMenuIcon className={"w-5 h-5 mr-4 text-dark-grayish-blue"}/>}

                <Logo />

                {screenWidth > 600 && (
                    <menu className={"flex flex-row gap-9 left-[22%] top-[5%] absolute"}>
                        {options.map(option => (
                            <li
                                key={option.id}
                                className={"cursor-pointer text-dark-grayish-blue hover:border-orange hover:border-b-4 h-[5.5rem]"}
                            >
                                {option.label}
                            </li>
                        ))}
                    </menu>
                )}
            </div>
            <div className={"flex items-center w-full justify-end"}>
                <CartIcon className={"mr-6"} />
                <Avatar />
            </div>
        </header>
    )
}