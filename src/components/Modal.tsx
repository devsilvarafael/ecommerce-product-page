import { ReactNode } from "react";

import { IoIosArrowBack as LeftArrowIcon, IoIosArrowForward as RightArrowIcon } from "react-icons/io";
import { IoMdClose as CloseIcon } from "react-icons/io"
import { act } from "react-dom/test-utils";

interface ModalProps {
    children: ReactNode;
    open: () => void;
    actions: { currentItemIndex: number, setCurrentItemIndex: (index: number) => void, productImagesAmount: number }
}

export const Modal = ({ children, open, actions }: ModalProps) => {
    if (actions.currentItemIndex > actions.productImagesAmount - 1) {
        actions.setCurrentItemIndex(0);
    }

    if (actions.currentItemIndex < 0) {
        actions.setCurrentItemIndex(actions.productImagesAmount - 1)
    }

    const handleModalToNextItem = () => {
        actions.setCurrentItemIndex(actions.currentItemIndex + 1)
    }

    const handleModalToPreviousItem = () => {
        actions.setCurrentItemIndex(actions.currentItemIndex - 1);
    }

    return (
        <div className={"absolute w-screen h-screen bg-opacity-80 top-0 bg-black left-0"}>
            <div className={"flex flex-col justify-center items-center w-full h-full"}>
                <div className={"max-w-xl"}>
                    <CloseIcon className={"h-8 w-8 text-white ml-auto mb-7 cursor-pointer"} onClick={open}/>
                    <span
                        className={"fixed left-[32.6%] top-[41%] w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"}
                        onClick={handleModalToPreviousItem}
                    >
                        <LeftArrowIcon className={"h-8 w-8"}/>
                    </span>
                    {children}
                    <span
                        className={"fixed right-[32.6%] top-[41%] w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"}
                        onClick={handleModalToNextItem}
                    >
                        <RightArrowIcon className={"h-8 w-8"}/>
                    </span>
                </div>
            </div>
        </div>
    )
}