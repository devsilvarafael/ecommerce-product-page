import { Dispatch, ReactNode, SetStateAction } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io"

// Components imports
import { Carousel } from "@core/components/Carousel";

interface ModalProps {
    children: ReactNode;
    open: () => void;
    actions: { currentItemIndex: number, setCurrentItemIndex: Dispatch<SetStateAction<number>>, productImagesAmount: number }
}

export const Modal = ({ children, open, actions }: ModalProps) => {
    return (
        <div className={"absolute w-screen h-screen bg-opacity-80 top-0 bg-black left-0 z-40"}>
            <div className={"w-full h-full flex justify-center items-center"}>
                <div className={"max-w-2xl"}>
                    <Carousel position={{ leftArrow: "left-[32.0%] top-[43%]", rightArrow: "right-[32.0%] top-[43%]"}} actions={actions} />
                    <CloseIcon className={"h-8 w-8 text-white ml-auto mb-7 cursor-pointer"} onClick={open}/>
                    {children}
                </div>
            </div>
        </div>
    )
}