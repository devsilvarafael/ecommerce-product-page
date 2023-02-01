import { FaMinus as MinusIcon, FaPlus as PlusIcon } from "react-icons/fa"
import { useReducer } from "react";

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

function amountReducer (state: ProductAmount, action: InputAction) {
    const { type } = action
    if(type === InputTypes.INCREASE) {
        return {
            amount: state.amount + 1
        }
    }

    if(type === InputTypes.DECREASE) {
        if (state.amount === 0) {
            return {
                amount: 0
            }
        }
        return {
            amount: state.amount - 1
        }
    }

    return {
        amount: 0
    }
}

export const InputAmount = () => {
    const [state, dispatch] = useReducer(amountReducer, { amount: 0 })

    return (
        <div className={"flex flex-row bg-light-grayish-blue h-14 items-center rounded-xl w-3/5 justify-around"}>
            <MinusIcon className={"text-orange cursor-pointer"} onClick={() => dispatch({ type: InputTypes.DECREASE })}/>

            <input
                type={"number"}
                className={"bg-transparent m-0 p-0 font-bold text-center max-w-[40px]"}
                value={state.amount}
                min={0}
            />

            <PlusIcon  className={"text-orange cursor-pointer"} onClick={() => dispatch({ type: InputTypes.INCREASE })}/>
        </div>
    )
}