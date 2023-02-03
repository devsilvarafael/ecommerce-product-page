// React imports
import { Dispatch, Fragment, SetStateAction } from "react";

// React-icons imports
import { IoIosArrowBack as LeftArrowIcon, IoIosArrowForward as RightArrowIcon } from "react-icons/io";

export type ArrowActions = {
    position: { leftArrow: string, rightArrow: string }
    actions: { currentItemIndex: number, setCurrentItemIndex: Dispatch<SetStateAction<number>>, productImagesAmount: number }
}

export const Carousel = ({ position, actions }: ArrowActions) => {
    const handleModalToNextItem = () => {
        if (actions.currentItemIndex === actions.productImagesAmount - 1) {
            return actions.setCurrentItemIndex(actions.currentItemIndex)
        }
        actions.setCurrentItemIndex(index => index + 1)
    }

    const handleModalToPreviousItem = () => {
        if (actions.currentItemIndex <= 0) {
            return actions.setCurrentItemIndex(actions.currentItemIndex)
        }
        actions.setCurrentItemIndex(index => index - 1);
    }

    return (
        <Fragment>
            <span
                className={`
                    absolute w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer inset-y-52
                    hover:text-orange ${position.leftArrow}
                `}
                onClick={handleModalToPreviousItem}
            >
                <LeftArrowIcon className={"w-6 h-6 md:h-8 md:w-8"}/>
            </span>

            <span
                className={`
                    absolute w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer inset-y-52
                    hover:text-orange ${position.rightArrow}
                `}
                onClick={handleModalToNextItem}
            >
                <RightArrowIcon className={"w-6 h-6 md:h-8 md:w-8"}/>
            </span>
        </Fragment>
    )
}