export const ProductInfo = () => {
    return (
        <div>
            <p className={"uppercase text-sm text-orange font-extrabold tracking-widest"}>Sneaker Company</p>
            <h2 className={"text-5xl font-bold mt-4 mb-12 max-w-xl"}>Fall Limited Edition Sneakers</h2>
            <p className={"mb-8 text-dark-grayish-blue max-w-lg"}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
                sole, they’ll withstand everything the weather can offer.
            </p>
            <p className={"text-2xl font-bold flex mb-2"}>
                $125.00 <span className={"ml-6 text-lg font-semibold bg-pale-orange text-orange pt-1 px-1.5 rounded-md"}>50%</span>
            </p>
            <p className={"text-grayish-blue font-bold line-through"}>
                $250.00
            </p>
        </div>
    )
}