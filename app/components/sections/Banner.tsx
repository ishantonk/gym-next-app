"use client";

import { Button, Container, Heading } from "@/app/components";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
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
                            flex
                            flex-col
                            flex-[3]
                            items-start
                            gap-y-2
                        "
                    >
                        <div
                            id="banner-heading-sm"
                            className="
                                lg:hidden
                            "
                        >
                            <Heading
                                title="MAKE YOUR"
                                outline
                                type={{ size: "xl", priority: "h3" }}
                            />
                            <Heading
                                title="BODY SHAPE"
                                type={{ size: "xxl", priority: "h3" }}
                            />
                        </div>
                        <div
                            id="banner-heading-lg"
                            className="
                                hidden
                                lg:block
                            "
                        >
                            <Heading
                                title="MAKE YOUR"
                                outline
                                type={{ size: "xxl", priority: "h3" }}
                            />
                            <Heading
                                title="BODY SHAPE"
                                type={{ size: "xxxl", priority: "h3" }}
                            />
                        </div>
                        <p
                            className="
                                text-sm
                                md:text-base
                                lg:text-lg
                                2xl:text-xl
                                font-normal
                                text-neutral-500
                                w-3/4
                                lg:w-3/5
                                2xl:w-7/12
                                mt-4
                                mb-6
                            "
                        >
                            In regard to using gym work experience to help with
                            my college course I was able to do soon.
                        </p>
                        <Button
                            label="Get Started"
                            icon={FiArrowUpRight}
                            outline
                            onClick={() => {}}
                        />
                    </div>
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            flex-[2]
                            justify-center
                            items-center
                            aspect-square
                            w-3/5
                            h-1/2
                            mx-auto
                        "
                    >
                        <Image
                            src={"/images/personal_training.svg"}
                            alt="banner"
                            fill
                            sizes="30vw"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
