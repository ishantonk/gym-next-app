"use client";

import { IconType } from "react-icons/lib";

interface IconButtonProps {
    icon: IconType;
    iconSize?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
    icon: Icon,
    iconSize = 20,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className="
                flex
                flex-row
                items-center
                justify-center
                rounded-full
                p-2
                sm:p-3
                m-1
                sm:m-2
                transition-colors
                duration-200
                ease-in-out
                text-neutral-500
                hover:text-neutral-800
                hover:bg-neutral-100
                focus:outline-none
                focus:text-neutral-800
                focus:bg-neutral-100
            "
        >
            <Icon size={iconSize} />
        </button>
    );
};

export default IconButton;
