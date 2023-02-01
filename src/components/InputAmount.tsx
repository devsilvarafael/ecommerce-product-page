import { FaMinus as MinusIcon, FaPlus as PlusIcon } from "react-icons/fa"

export const InputAmount = () => {
    return (
        <div className={"flex flex-row bg-light-grayish-blue h-14 items-center rounded-xl w-3/5 justify-around"}>
            <MinusIcon className={"text-orange cursor-pointer"} />

            <input type={"number"} className={"bg-transparent m-0 p-0 font-bold text-center max-w-[40px]"} defaultValue={0} />

            <PlusIcon  className={"text-orange cursor-pointer"} />
        </div>
    )
}