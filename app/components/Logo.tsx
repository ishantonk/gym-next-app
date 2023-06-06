'use client';

import Link from "next/link";
import { CgGym } from "react-icons/cg";

const Logo = () => {
    return (
        <Link href={"/"}>
            <div
                className="
                    flex
                    flex-row
                    justify-center
                    items-center
                "
            >
                <CgGym size={28} />
                <h1
                    className="
                        text-2xl
                        font-bold
                        text-neutral-800
                        tracking-wide
                        ml-2
                    "
                >
                    <span>
                        My
                    </span>
                    <span
                        className="
                            font-semibold
                            text-green-400
                        "
                    >
                        Gym
                    </span>
                </h1>
            </div>
        </Link>
    );
};

export default Logo;
