import { linkType } from "@/app/types";
import { SiteLink } from "@/app/components";

interface LinkListProps {
    menuItems: linkType[];
}

const LinkList: React.FC<LinkListProps> = ({ menuItems }) => {
    return (
        <ul
            className="
                flex
                flex-row
                sm:flex-col
                flex-wrap
                gap-x-4
                sm:gap-y-1.5
            "
        >
            {menuItems.map((item) => (
                <li key={item.label}>
                    <SiteLink label={item.label} to={item.address} />
                </li>
            ))}
        </ul>
    );
};

export default LinkList;
