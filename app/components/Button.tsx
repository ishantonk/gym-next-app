"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
    label: string;
    icon?: IconType;
    iconSize?: number;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    widthFull?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    icon: Icon,
    iconSize = 16,
    onClick,
    disabled,
    outline,
    widthFull,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                flex
                flex-row
                justify-center
                items-center
                rounded
                ${widthFull ? "w-full" : "w-auto"}
                px-2
                sm:px-2.5
                py-1
                sm:py-1.5
                text-sm
                font-semibold
                text-neutral-800
                ${outline ?? "hover:text-neutral-500"}
                ${outline ? "bg-transparent" : "bg-neutral-200"}
                hover:bg-neutral-200/50
                border
                ${outline ? "border-neutral-200" : "border-transparent"}
                focus:border-blue-600
                focus:ring-1
                focus:ring-blue-600
                ${disabled ? "opacity-50" : "opacity-100"}
                transition-all
                duration-200
                ease-in-out
            `}
        >
            {label}
            {Icon && (
                <span
                    className="
                        ml-1
                    "
                >
                    <Icon size={iconSize} />
                </span>
            )}
        </button>
    );
};

export default Button;
