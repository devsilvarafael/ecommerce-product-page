import avatar from "../assets/images/image-avatar.png"

export const Avatar = () => {
    return (
        <div className={"w-6 h-6 md:w-14 md:h-14 rounded-full"}>
            <img src={avatar} />
        </div>
    )
}