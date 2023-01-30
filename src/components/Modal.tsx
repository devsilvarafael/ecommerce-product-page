import {ReactNode} from "react";

import { IoIosArrowBack as LeftArrow } from "react-icons/io";
import { IoIosArrowForward as RightArrow } from "react-icons/io";
interface IModal {
    children: ReactNode;
}
export const Modal = ({ children }: IModal) => {
    return (
        <div className={"absolute w-screen h-screen bg-opacity-80 top-0 bg-black left-0"}>
            <div className={"flex justify-center items-center h-full"}>
                <span className={"fixed left-[32.6%] top-[40%] w-16 h-16 bg-white rounded-full flex items-center justify-center"}>
                    <LeftArrow className={"h-8 w-8"}/>
                </span>
                {children}
                <span className={"fixed right-[32.6%] top-[40%] w-16 h-16 bg-white rounded-full flex items-center justify-center"}>
                    <RightArrow className={"h-8 w-8"} />
                </span>
            </div>
        </div>
    )
}