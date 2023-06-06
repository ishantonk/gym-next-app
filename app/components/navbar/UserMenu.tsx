import { IconType } from "react-icons/lib";

import { Avatar } from "@/app/components";
import { CgLogIn, CgSignal } from "react-icons/cg";

interface MenuItemProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    icon: IconType;
    label: string;
    disabled?: boolean;
}

const UserMenu = () => {
    return (
        <div
            className="
                relative
                group
            "
        >
            <Avatar />
            <div
                className="
                    absolute
                    top-10
                    right-0
                    translate-x-1/2
                    hidden
                    flex-col
                    justify-center
                    items-center
                    p-1.5
                    m-2
                    bg-white
                    rounded
                    shadow-lg
                    group-hover:flex
                "
            >
                <MenuItem icon={CgLogIn} label="Log In" onClick={() => {}} />
                <MenuItem icon={CgSignal} label="Sign Up" onClick={() => {}} />
            </div>
        </div>
    );
};

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    icon: Icon,
    label,
    disabled,
}) => {
    return (
        <div
            aria-disabled={disabled}
            className="
                flex
                flex-row
                justify-start
                items-center
                rounded-md
                min-w-full
                px-2.5
                py-2
                gap-x-2
                font-light
                text-sm
                cursor-pointer
                transition-colors
                duration-200
                ease-in-out
                hover:bg-neutral-100
                text-neutral-500
                hover:text-neutral-700
                disabled:text-neutral-400
                disabled:cursor-not-allowed
            "
        >
            <span>{Icon && <Icon size={24} />}</span>
            <span
                className="
                    whitespace-nowrap
                "
            >
                {label}
            </span>
        </div>
    );
};

export default UserMenu;
