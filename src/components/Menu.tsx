import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as CartIcon } from "../assets/images/icon-cart.svg";

const options = [
    { id: 0, label: "Collections" },
    { id: 1, label: "Men" },
    { id: 2, label: "Women" },
    { id: 3, label: "About" },
    { id: 4, label: "Contact" }
]
export const Menu = () => {
    return (
        <header className={"flex flex-row justify-between border-b-2 h-20"}>
            <div className={"flex space-x-20"}>
                <Logo />

                <ul className={"flex flex-row gap-9 "}>
                    {options.map(option => (
                        <li
                            key={option.id}
                            className={"hover:border-orange hover:border-b-4 cursor-pointer"}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={"flex space-x-10"}>
                <CartIcon />
                <p>
                    Avatar
                </p>
            </div>
        </header>
    )
}