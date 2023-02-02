import avatar from "/images/image-avatar.png"

export const Avatar = () => {
    return (
        <div className={"w-6 h-6 md:w-14 md:h-14 rounded-full hover:outline hover:outline-orange md:hover:outline-3 cursor-pointer"}>
            <img src={avatar} />
        </div>
    )
}