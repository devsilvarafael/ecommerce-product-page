import avatar from "../assets/images/image-avatar.png"

export const Avatar = () => {
    return (
        <div className={"w-14 h-14 rounded-full"}>
            <img src={avatar} />
        </div>
    )
}