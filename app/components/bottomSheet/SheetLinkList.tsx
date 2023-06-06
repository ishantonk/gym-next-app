import { linkType } from "@/app/types";
import Link from "next/link";

interface SheetLinkListProps {
    menuItems: linkType[];
}

const SheetLinkList: React.FC<SheetLinkListProps> = ({ menuItems }) => {
    return (
        <ul
            className="
                flex
                flex-col
                w-full
                justify-center
                items-start
                gap-y-0.5
                text-lg
                font-medium
                text-neutral-500
            "
        >
            {menuItems.map((item) => (
                <li
                    key={item.label}
                    className="
                        flex
                        flex-col
                        items-start
                        justify-center
                        w-full
                        rounded
                        transition-all
                        duration-300
                        ease-in-out
                        hover:bg-neutral-100
                        hover:text-neutral-800
                    "
                >
                    <Link
                        href={item.address}
                        className="
                            h-full
                            w-full
                            px-4
                            py-1.5
                        "
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SheetLinkList;
