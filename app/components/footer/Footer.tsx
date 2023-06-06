"use client";

import {
    Button,
    Container,
    Divider,
    Heading,
    InputBox,
    Logo,
} from "@/app/components";
import { LinkList, SocialLinks } from "./index";

const Footer = () => {
    return (
        <footer>
            <Divider />
            <Container>
                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        my-6
                        sm:my-10
                        sm:mb-16
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-[3]
                            justify-center
                            items-start
                            gap-y-5
                            mb-6
                            sm:my-0
                        "
                    >
                        <Logo />
                        <p
                            className="
                                text-sm
                                font-medium
                                text-neutral-800
                                mb-2
                                w-2/5
                                sm:mb-3
                                sm:w-2/3
                                md:text-base
                                lg:w-1/2
                                lg:text-xl
                                lg:mb-5
                            "
                        >
                            Subscribe for company update below.
                        </p>
                        <div
                            className="
                                flex
                                flex-row
                                justify-center
                                items-center
                                w-3/5
                                sm:w-3/4
                                gap-x-2
                            "
                        >
                            <InputBox placeholder="Your Email" />
                            <Button
                                onClick={() => {}}
                                label="Subscribe"
                                outline
                            />
                        </div>
                    </div>
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-1
                            items-start
                            justify-center
                            sm:justify-start
                            sm:gap-y-3
                            my-2
                            sm:my-0
                            sm:ml-4
                        "
                    >
                        <Heading
                            title="SERVICES"
                            type={{ size: "m", priority: "h5" }}
                        />
                        <LinkList
                            menuItems={[
                                { label: "Flex Muscle", address: "#" },
                                { label: "Cardio Exercise", address: "#" },
                                { label: "Basic Yoga", address: "#" },
                                { label: "Weight Lifting", address: "#" },
                            ]}
                        />
                    </div>
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-1
                            items-start
                            justify-center
                            sm:justify-start
                            sm:gap-y-3
                            my-2
                            sm:my-0
                            sm:ml-4
                        "
                    >
                        <Heading
                            title="PRICING"
                            type={{ size: "m", priority: "h5" }}
                        />
                        <LinkList
                            menuItems={[
                                { label: "Basic", address: "#" },
                                { label: "Premium", address: "#" },
                                { label: "Diamond", address: "#" },
                            ]}
                        />
                    </div>
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-1
                            items-start
                            justify-center
                            sm:justify-start
                            sm:gap-y-3
                            my-2
                            sm:my-0
                            sm:ml-4
                        "
                    >
                        <Heading
                            title="COMPANY"
                            type={{ size: "m", priority: "h5" }}
                        />
                        <LinkList
                            menuItems={[
                                { label: "About Us", address: "#" },
                                { label: "Careers", address: "#" },
                                { label: "Customers", address: "#" },
                                { label: "Partners", address: "#" },
                            ]}
                        />
                    </div>
                </div>
                <Divider />
                <div
                    className="
                        flex
                        flex-col-reverse
                        items-center
                        justify-center
                        py-2
                        sm:flex-row
                        sm:justify-between
                    "
                >
                    <p
                        className="
                            text-xs
                            font-light
                            text-neutral-500
                            mt-2.5
                            sm:mt-0
                            lg:text-sm
                        "
                    >
                        &copy; Copyright BroFit 2023, All right reserved.
                    </p>
                    <SocialLinks />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
