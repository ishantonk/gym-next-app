"use client";

import Image from "next/image";
import { TiTick } from "react-icons/ti";

import Container from "../Container";
import Heading from "../Heading";
import { priceCardOptionType } from "@/app/types";
import Button from "../Button";
import { FiArrowRight } from "react-icons/fi";

const Pricing = () => {
    return (
        <section>
            <Container>
                <div
                    className="
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-y-2
                        lg:gap-y-4
                        mb-10
                        lg:mb-16
                    "
                >
                    <Heading
                        title="Pricing"
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
                            title="OUR"
                            outline
                            type={{ size: "xl", priority: "h4" }}
                        />
                        <Heading
                            title="SPECIAL PLAN"
                            type={{ size: "xl", priority: "h4" }}
                        />
                    </div>
                </div>
                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:flex-nowrap
                        justify-center
                        sm:justify-around
                        items-center
                        gap-4
                        mx-10

                    "
                >
                    <PriceCard
                        cardImg="/images/energizer.svg"
                        title="BASIC PACKAGE"
                        price="$120"
                        options={[
                            {
                                option: "5 Days in a week",
                                checked: true,
                            },
                            {
                                option: "01 Sweatshirt",
                                checked: true,
                            },
                            {
                                option: "01 Bottle of protein",
                                checked: false,
                            },
                            {
                                option: "Access to videos",
                                checked: false,
                            },
                            {
                                option: "Muscle stretching",
                                checked: false,
                            },
                        ]}
                    />
                    <PriceCard
                        cardImg="/images/pilates.svg"
                        title="PREMIUM PACKAGE"
                        price="$240"
                        options={[
                            {
                                option: "5 Days in a week",
                                checked: true,
                            },
                            {
                                option: "01 Sweatshirt",
                                checked: true,
                            },
                            {
                                option: "01 Bottle of protein",
                                checked: true,
                            },
                            {
                                option: "Access to videos",
                                checked: true,
                            },
                            {
                                option: "Muscle stretching",
                                checked: false,
                            },
                        ]}
                    />
                    <PriceCard
                        cardImg="/images/yoga.svg"
                        title="DIAMOND PACKAGE"
                        price="$420"
                        options={[
                            {
                                option: "5 Days in a week",
                                checked: true,
                            },
                            {
                                option: "01 Sweatshirt",
                                checked: true,
                            },
                            {
                                option: "01 Bottle of protein",
                                checked: true,
                            },
                            {
                                option: "Access to videos",
                                checked: true,
                            },
                            {
                                option: "Muscle stretching",
                                checked: true,
                            },
                        ]}
                    />
                </div>
            </Container>
        </section>
    );
};

interface PriceCardProps {
    cardImg: string;
    title: string;
    price: string;
    options: priceCardOptionType[];
}

const PriceCard: React.FC<PriceCardProps> = ({
    cardImg,
    title,
    price,
    options,
}) => {
    return (
        <div
            className="
                flex
                flex-col
                justify-center
                items-start
                rounded
                cursor-pointer
                gap-y-6
                lg:gap-y-8
                p-6
                lg:p-10
                w-4/5
                sm:w-auto
                hover:shadow-lg
                border
                border-transparent
                hover:border-neutral-200
                hover:bg-neutral-100/75
                transition-all
                duration-300
                ease-in-out
            "
        >
            <div
                className="
                    relative
                    flex
                    flex-col
                    justify-center
                    items-center
                    aspect-square
                    w-1/3
                    lg:w-1/2
                    rounded-full
                    overflow-hidden
                "
            >
                <Image src={cardImg} alt={`card-${title}`} fill sizes="100vw" />
            </div>
            <div
                className="
                    flex
                    flex-col
                    justify-center
                    items-start
                    gap-y-4
                    lg:gap-y-6
                "
            >
                <Heading title={title} type={{ size: "l", priority: "h4" }} />
                <Heading title={price} type={{ size: "xl", priority: "h4" }} />
            </div>
            <ul
                className="
                    flex
                    flex-col
                    justify-center
                    items-start
                    gap-y-2
                "
            >
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`
                            flex
                            flex-row
                            gap-x-4
                            items-center
                            justify-start
                            text-sm
                            font-medium
                            ${
                                option.checked
                                    ? "text-neutral-800"
                                    : "text-neutral-500"
                            }
                        `}
                    >
                        <span
                            className={`
                                flex
                                flex-row
                                items-center
                                justify-center
                                p-0.5
                                rounded-full
                                border-2
                                ${
                                    option.checked
                                        ? "border-neutral-800"
                                        : "border-neutral-500"
                                }
                                ${
                                    option.checked
                                        ? "text-neutral-800"
                                        : "text-neutral-500"
                                }
                            `}
                        >
                            <TiTick size={20} />
                        </span>
                        {option.option}
                    </li>
                ))}
            </ul>
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    w-full
                "
            >
                <Button
                    label="Purchase Now"
                    icon={FiArrowRight}
                    outline
                    onClick={() => console.log("Purchase Now")}
                />
            </div>
        </div>
    );
};

export default Pricing;
