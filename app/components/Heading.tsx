'use client';

import { headingType } from "@/app/types";

interface HeadingProps {
    title: string;
    outline?: boolean;
    color?: string;
    type?: headingType;
}

const HeadingClass = {
    s: "text-xs sm:text-sm font-medium",
    m: "text-base sm:text-lg font-medium",
    l: "text-xl sm:text-2xl font-semibold",
    xl: "text-3xl sm:text-4xl font-bold",
    xxl: "text-5xl sm:text-6xl font-bold",
    xxxl: "text-7xl sm:text-8xl font-extrabold",
};

const Heading: React.FC<HeadingProps> = ({
    title,
    outline,
    color = "text-neutral-800",
    type = { priority: "h3", size: "m" },
}) => {
    return (
        <>
            {type.priority === "h1" && (
                <h1 className={`${HeadingClass[type.size]} ${color} ${outline && "outline-text text-transparent"}`}>{title}</h1>
            )}

            {type.priority === "h2" && (
                <h2 className={`${HeadingClass[type.size]} ${color} ${outline && "outline-text text-transparent"}`}>{title}</h2>
            )}
            {type.priority === "h3" && (
                <h3 className={`${HeadingClass[type.size]} ${color} ${outline && "outline-text text-transparent"}`}>{title}</h3>
            )}
            {type.priority === "h4" && (
                <h4 className={`${HeadingClass[type.size]} ${color} ${outline && "outline-text text-transparent"}`}>{title}</h4>
            )}
            {type.priority === "h5" && (
                <h5 className={`${HeadingClass[type.size]} ${color} ${outline && "outline-text text-transparent"}`}>{title}</h5>
            )}
            {type.priority === "h6" && (
                <h6 className={`${HeadingClass[type.size]} ${color} ${outline && "outline-text text-transparent"}`}>{title}</h6>
            )}
        </>
    );
};

export default Heading;
