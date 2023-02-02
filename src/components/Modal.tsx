import { Dispatch, ReactNode, SetStateAction } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io"
import { Carousel } from "./Carousel";

interface ModalProps {
    children: ReactNode;
    open: () => void;
    actions: { currentItemIndex: number, setCurrentItemIndex: Dispatch<SetStateAction<number>>, productImagesAmount: number }
}

export const Modal = ({ children, open, actions }: ModalProps) => {
    return (
        <div className={"absolute w-screen h-screen bg-opacity-80 top-0 bg-black left-0"}>
            <div className={"flex flex-col justify-center items-center w-full h-full"}>
                <div className={"max-w-xl"}>
                    <Carousel position={{ leftArrow: "left-[32.6%] top-[41%]", rightArrow: "right-[32.6%] top-[41%]"}} actions={actions} />
                    <CloseIcon className={"h-8 w-8 text-white ml-auto mb-7 cursor-pointer"} onClick={open}/>
                    {children}
                </div>
            </div>
        </div>
    )
}