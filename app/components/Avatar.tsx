import { BsFillPersonFill } from "react-icons/bs";

const Avatar = () => {
    return (
        <div
            className="
                flex
                flex-row
                justify-center
                items-center
                rounded-full
                text-neutral-800
                bg-neutral-500
                hover:text-neutral-500
                hover:bg-neutral-400
                cursor-pointer
                p-1.5
            "
        >
            <BsFillPersonFill size={24} />
        </div>
    );
};

export default Avatar;