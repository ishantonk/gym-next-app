import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const SocialLinks = () => {
    return (
        <ul
            className="
                flex
                flex-row
                gap-x-2.5
                lg:gap-x-4
            "
        >
            <li
                className="
                    flex
                    flex-row
                    justify-center
                    items-center
                    rounded-full
                    p-1.5
                    lg:p-2.5
                    bg-blue-600
                    text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:opacity-80
                "
            >
                <FiFacebook size={16} />
            </li>
            <li
                className="
                    flex
                    flex-row
                    justify-center
                    items-center
                    rounded-full
                    p-1.5
                    lg:p-2.5
                    bg-pink-600
                    text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:opacity-80
                "
            >
                <FiInstagram size={16} />
            </li>
            <li
                className="
                    flex
                    flex-row
                    justify-center
                    items-center
                    rounded-full
                    p-1.5
                    lg:p-2.5
                    bg-blue-400
                    text-white
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:opacity-80
                "
            >
                <FiTwitter size={16} />
            </li>
        </ul>
    );
};

export default SocialLinks;
