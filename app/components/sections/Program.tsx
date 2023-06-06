'use client';

import { Container, Heading } from "@/app/components";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Program = () => {
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
                        title="Our Program"
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
                            title="BUILD YOUR"
                            outline
                            type={{ size: "xl", priority: "h4" }}
                        />
                        <Heading
                            title="BEST BODY"
                            type={{ size: "xl", priority: "h4" }}
                        />
                    </div>
                </div>
                <div
                    className="
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        md:px-4
                    "
                >
                    <ProgramCard
                        programName="Flex Muscle"
                        programDescription="Creating tension that's temporarily making the muscle fibers smaller or contracted"
                        programImageSrc="/images/stability_ball.svg"
                    />
                    <ProgramCard
                        programName="Cardio Exercise"
                        programDescription="Exercise your heart rate up and keeps it up for a prolonged period of time"
                        programImageSrc="/images/indoor_bike.svg"
                    />
                    <ProgramCard
                        programName="Basic Yoga"
                        programDescription="Diaphragmatic this is the most common breathing technique you'll find in yoga"
                        programImageSrc="/images/meditation.svg"
                    />
                    <ProgramCard
                        programName="Weight Lifting"
                        programDescription="Attempts a maximum weight single lift of a barbell loaded with weight plates"
                        programImageSrc="/images/healthy_habit.svg"
                    />
                </div>
            </Container>
        </section>
    );
};

interface ProgramCardProps {
    programName: string;
    programDescription: string;
    programImageSrc: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
    programName,
    programDescription,
    programImageSrc = "https://placehold.co/200x200.png",
}) => {
    return (
        <div
            className="
                flex
                flex-col
                items-start
                justify-center
                rounded
                cursor-pointer
                p-2
                md:p-4
                border
                border-transparent
                hover:border-neutral-200
                hover:bg-neutral-100/75
                transition-all
                duration-300
                ease-in-out
                group
            "
        >
            <div
                className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    aspect-square
                    w-1/3
                    rounded-full
                    overflow-hidden
                "
            >
                <Image
                    src={programImageSrc}
                    alt="program-image"
                    fill
                    sizes="50vw"
                />
            </div>
            <div
                className="
                    flex
                    flex-col
                    items-start
                    justify-center
                    gap-y-2
                    lg:gap-y-4
                    my-4
                    lg:my-6
                "
            >
                <Heading
                    title={programName}
                    type={{ size: "l", priority: "h3" }}
                />
                <p
                    className="
                        text-xs
                        lg:text-sm
                        font-light
                        lg:font-normal
                        text-neutral-500
                        mb-4
                        lg:mb-6
                    "
                >
                    {programDescription}
                </p>
                <span
                    className="
                        flex
                        flex-row
                        w-full
                        justify-end
                        opacity-0
                        transition-all
                        duration-300
                        ease-in-out
                        text-neutral-800
                        group-hover:opacity-100
                    "
                >
                    <FiArrowRight size={20} />
                </span>
            </div>
        </div>
    );
};

export default Program;
