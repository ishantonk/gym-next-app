'use client';

import Image from "next/image";
import Heading from "../Heading";
import Container from "../Container";

const Reason = () => {
    return (
        <section>
            <Container>
                <div
                    className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    sm:items-center
                "
                >
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            flex-[2]
                            items-center
                            justify-center
                            aspect-square
                            w-1/2
                            mx-auto
                        "
                    >
                        <Image
                            src={"/images/personal_trainer.svg"}
                            alt="reason"
                            fill
                            sizes="100vw"
                        />
                    </div>
                    <div
                        className="
                        flex
                        flex-col
                        flex-[3]
                        justify-center
                        items-center
                        gap-y-2
                        lg:gap-y-4
                        mb-10
                        lg:mb-16
                    "
                    >
                        <Heading
                            title="Best Reason"
                            color="text-neutral-500"
                            type={{ size: "l", priority: "h5" }}
                        />
                        <div
                            className="
                            flex
                            flex-row
                            gap-x-4
                        "
                        >
                            <Heading
                                title="WHY"
                                outline
                                type={{ size: "xl", priority: "h4" }}
                            />
                            <Heading
                                title="CHOOSE US ?"
                                type={{ size: "xl", priority: "h4" }}
                            />
                        </div>
                        <p
                            className="
                        text-xs
                        md:text-sm
                        font-light
                        md:font-normal
                        text-neutral-500
                        mb-6
                        md:mb-10
                    "
                        >
                            Choose your favorite class and start now. Remember,
                            the only bad workout is the one you didn&apos;t do.
                        </p>
                        <div
                            className="
                        grid
                        grid-cols-2
                        gap-10
                        lg:gap-24
                    "
                        >
                            <Tile title="200+" text="Total Members" />
                            <Tile title="50+" text="Best Trainers" />
                            <Tile title="25+" text="Programs" />
                            <Tile title="100+" text="Awards" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

interface TileProps {
    title: string;
    text: string;
}

const Tile: React.FC<TileProps> = ({ title, text }) => {
    return (
        <div
            className="
                flex
                flex-col
                justify-center
                items-center
            "
        >
            <Heading title={title} type={{ size: "l", priority: "h5" }} />
            <Heading
                title={text}
                color="text-neutral-500"
                type={{ size: "m", priority: "h6" }}
            />
        </div>
    );
};

export default Reason;
