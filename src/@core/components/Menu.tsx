// React imports
import { Fragment, useState } from "react";

// Components imports
import { Avatar } from "@core/components/Avatar";

// Hooks imports
import useWindowSize from "@core/hooks/useWindowSize";

// Icons imports
import { ReactComponent as Logo } from "../../../public/images/logo.svg";
import { MdMenu as HamburgerMenuIcon } from "react-icons/md";
import { MdClose as CloseIcon } from "react-icons/md"
import { Cart } from "@core/components/Cart";

const options = [
    { id: 0, label: "Collections" },
    { id: 1, label: "Men" },
    { id: 2, label: "Women" },
    { id: 3, label: "About" },
    { id: 4, label: "Contact" }
]


export const Menu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const { width: screenWidth } = useWindowSize();

    const handleMenuIsOpen = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleCartIsOpen = () => {
        setCartIsOpen(!cartIsOpen)
    }

    return (
        <header
            className={"fixed md:relative w-full bg-white z-40 flex items-center justify-between p-4 md:p-0 md:pb-12 md:pt-8  md:border-b-2"}>
            <div className={"flex flex-row items-center"}>
                {screenWidth > 600 ?
                    <menu
                        className={"absolute flex flex-col gap-7 left-5 top-14 mt-8 md:flex-row md:gap-9 md:left-[13%] md:top-12 md:mt-0 md:ml-12"}>
                        {options.map(option => (
                            <li
                                key={option.id}
                                className={"cursor-pointer md:text-md md:font-normal md:text-dark-grayish-blue md:hover:border-orange md:hover:border-b-4 md:h-[5.5rem]"}
                            >
                                {option.label}
                            </li>
                        ))}
                    </menu>
                    : menuIsOpen ?
                        <div className={"fixed w-screen h-screen bg-opacity-80 top-0 bg-black left-0 mb-px z-20"}>
                            <div className={`fixed h-full left-0 top-0 w-2/3 bg-white z-50`}>
                                <CloseIcon
                                    className={"relative cursor-pointer top-4 left-4 z-20 text-center text-dark-grayish-blue hover:text-orange"}
                                    size={25}
                                    title={"Close menu"}
                                    onClick={handleMenuIsOpen}
                                />
                                <menu
                                    className={"flex flex-col gap-7 left-5 md:left-[22%] top-14 absolute z-40 mt-8"} role={"menu items"}>
                                    {options.map(option => (
                                        <li
                                            key={option.id}
                                            className={"cursor-pointer text-lg font-semibold text-dark-blue hover:text-orange"}
                                        >
                                            {option.label}
                                        </li>
                                    ))}
                                </menu>
                            </div>
                        </div>

                        :
                        <HamburgerMenuIcon
                            className={"relative mr-4 text-dark-grayish-blue hover:text-orange cursor-pointer"}
                            size={25}
                            title={"Open menu"}
                            onClick={handleMenuIsOpen}
                        />
                }

                <Logo/>
            </div>
            <div className={"flex items-center w-full justify-end"}>
                <Cart isOpen={cartIsOpen} openCart={handleCartIsOpen}/>
                <Avatar/>
            </div>
        </header>
    )
}