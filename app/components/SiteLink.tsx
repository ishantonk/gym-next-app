'use client';

import Link from "next/link";

interface SiteLinkProps {
    label: string;
    to?: string;
    disabled?: boolean;
}

const SiteLink: React.FC<SiteLinkProps> = ({
    label,
    to = "/",
    disabled = false,
}) => {
    return (
        <Link
            href={to}
            aria-disabled={disabled}
            className="
                    font-normal
                    text-xs
                    sm:text-sm
                    whitespace-nowrap
                    transition-colors
                    duration-200
                    ease-in-out
                    text-neutral-500
                    hover:text-neutral-800
                    disabled:text-neutral-300
                    disabled:cursor-not-allowed
                "
        >
            {label}
        </Link>
    );
};

export default SiteLink;
