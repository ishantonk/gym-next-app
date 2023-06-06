"use client";

import Image from "next/image";
import { Container, Heading, InputBox, Button } from "@/app/components";

const CalculateBMI = () => {
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
                        md:gap-y-4
                    "
                    >
                        <div
                            className="
                            flex
                            flex-row
                            gap-x-4
                        "
                        >
                            <Heading
                                title="CALCULATE"
                                outline
                                type={{ size: "xl", priority: "h4" }}
                            />
                            <Heading
                                title="YOUR BMI"
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
                            The Body Mass Index (BMI) Calculator calculates body
                            mass index from your Weight and Height.
                        </p>
                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                gap-4
                                w-full
                                sm:w-3/5
                            "
                        >
                            <InputBox placeholder="Height" />
                            <InputBox placeholder="Weight" />
                        </div>
                        <div
                            className="
                                flex
                                flex-row
                                w-full
                                sm:w-3/5
                                my-4
                            "
                        >
                            <Button
                                label="Calculate Now"
                                onClick={() => console.log("clicked")}
                                outline
                                widthFull
                            />
                        </div>
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
                            src="/images/fitness_stats.svg"
                            alt="calculate-bmi"
                            fill
                            sizes="100vw"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CalculateBMI;
