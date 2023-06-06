"use client";

import { FiX } from "react-icons/fi";

import { IconButton } from "@/app/components";

interface BottomSheetProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
    children,
    isOpen,
    onClose,
}) => {
    return (
        <div
            onClick={onClose}
            className={`
                fixed
                left-0
                right-0
                bottom-0
                top-0
                ${isOpen ? "z-50" : "-z-50"}
                ${isOpen ? "bg-black/20" : "bg-transparent"}
                ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
                ${isOpen ? "backdrop-blur-sm" : "backdrop-blur-0"}
                transition-all
                duration-300
                ease-in-out
            `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    fixed
                    bottom-0
                    left-0
                    right-0
                    bg-white
                    rounded-t-xl
                    ${isOpen ? "shadow-lg" : "shadow-none"}
                    ${isOpen ? "translate-y-0" : "translate-y-full"}
                    transition-all
                    duration-500
                    ease-in-out
                `}
            >
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        my-2
                        p-2
                    "
                >
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-end
                            w-full
                        "
                    >
                        <IconButton icon={FiX} onClick={onClose} />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BottomSheet;
