"use client";

import { FiMenu } from "react-icons/fi";

import { Button, Container, IconButton, Logo } from "@/app/components";
import { NavMenu } from "./index";

interface NavbarProps {
    openSheet(open: boolean): void;
}

const Navbar: React.FC<NavbarProps> = ({ openSheet }) => {
    return (
        <header
            className="
                fixed
                flex
                flex-row
                items-center
                justify-center
                w-full
                h-14
                sm:h-16
                backdrop-blur-lg
                shadow-sm
                z-10
            "
        >
            <Container>
                <nav
                    className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        w-full
                    "
                >
                    <Logo />
                    <div
                        className="
                            sm:hidden
                        "
                    >
                        <IconButton
                            icon={FiMenu}
                            onClick={() => {
                                openSheet(true);
                            }}
                        />
                    </div>
                    <div
                        className="
                            hidden
                            sm:flex
                            flex-row
                            items-center
                            justify-between
                            gap-x-5
                        "
                    >
                        <NavMenu
                            menuItems={[
                                { label: "About", address: "/" },
                                { label: "Services", address: "/" },
                                { label: "Pricing", address: "/" },
                                { label: "Contact Us", address: "/" },
                            ]}
                        />
                        <Button
                            label="Register Now"
                            onClick={() => console.log("Register")}
                        />
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
