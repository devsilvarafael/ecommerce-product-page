import { FaMinus as MinusIcon, FaPlus as PlusIcon } from "react-icons/fa"
import { Dispatch, SetStateAction, useEffect, useReducer } from "react";
import useCart from "@core/hooks/useCart";

enum InputTypes {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE"
}

type InputAction = {
    type: InputTypes;
}

type ProductAmount = {
    amount: number;
}

type SendAmount = {
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>
}

function amountReducer (state: ProductAmount, action: InputAction) {
    const { type } = action
    if(type === InputTypes.INCREASE) {
        return {
            amount: state.amount + 1
        }
    }

    if(type === InputTypes.DECREASE) {
        if (state.amount === 1) {
            return {
                amount: 1
            }
        }
        return {
            amount: state.amount - 1
        }
    }

    return {
        amount: 1
    }
}

export const InputAmount = () => {
    const [state, dispatch] = useReducer(amountReducer, { amount: 1 })
    const { amount, setAmount } = useCart();

    useEffect(() => {
        setAmount(state.amount)
    }, [state.amount])

    return (
        <div className={"flex flex-row bg-light-grayish-blue h-14 items-center rounded-xl w-full md:w-3/5 justify-around shadow-md"}>
            <MinusIcon className={"text-orange cursor-pointer"} onClick={() => dispatch({ type: InputTypes.DECREASE })}/>

            <input
                type={"number"}
                aria-label={"Product amount"}
                role={""}
                className={"bg-transparent m-0 p-0 font-bold text-center max-w-[40px]"}
                value={amount}
                readOnly={true}
                min={0}
            />

            <PlusIcon  className={"text-orange cursor-pointer"} onClick={() => dispatch({ type: InputTypes.INCREASE })}/>
        </div>
    )
}