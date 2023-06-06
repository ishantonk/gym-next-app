'use client';

import { Button, Divider } from "@/app/components";
import { BottomSheet, SheetLinkList } from "../bottomSheet";

interface NavBottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
}

const NavBottomSheet: React.FC<NavBottomSheetProps> = ({ isOpen, onClose }) => {
    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <SheetLinkList
                menuItems={[
                    { label: "About", address: "/" },
                    { label: "Services", address: "/" },
                    { label: "Pricing", address: "/" },
                    { label: "Contact Us", address: "/" },
                ]}
            />
            <Divider />
            <Button
                label="Register Now"
                outline
                widthFull
                onClick={() => console.log("Register Now")}
            />
        </BottomSheet>
    );
};

export default NavBottomSheet;
