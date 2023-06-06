import { SiteLink } from "@/app/components";
import { linkType } from "@/app/types";

interface NavMenuProps {
    menuItems: linkType[];
}

const NavMenu: React.FC<NavMenuProps> = ({ menuItems }) => {
    return (
        <ul
            className="
                flex
                flex-row
                justify-between
                items-center
            "
        >
            {menuItems.map((item) => (
                <li
                    key={item.label}
                    className="
                        mx-1
                        sm:mx-1.5
                        md:mx-2
                        lg:mx-2.5
                        xl:mx-3
                    "
                >
                    <SiteLink label={item.label} to={item.address} />
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;