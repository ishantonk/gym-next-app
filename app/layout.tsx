"use client";
import { useState } from "react";

import { Footer } from "./components/footer";
import { NavBottomSheet, Navbar } from "./components/navbar";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { ClientOnly } from "./components";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [navBottomSheetOpen, setNavBottomSheetOpen] = useState(false);

    function openSheet(open: boolean) {
        open ? setNavBottomSheetOpen(true) : setNavBottomSheetOpen(false);
    }

    function closeSheet() {
        setNavBottomSheetOpen(false);
    }

    return (
        <html lang="en">
            <body className={nunito.className + " relative"}>
                <ClientOnly>
                    <Navbar openSheet={openSheet} />
                    <NavBottomSheet
                        isOpen={navBottomSheetOpen}
                        onClose={closeSheet}
                    />
                    <div id="navbar-space" className="h-14 sm:h-16"></div>
                    {children}
                    <Footer />
                </ClientOnly>
            </body>
        </html>
    );
}
