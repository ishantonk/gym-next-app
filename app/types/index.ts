export type linkType = {
    label: string;
    address: string;
};

export type headingType = {
    priority: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size: "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
}

export type buttonSize = "small" | "medium" | "large";

export type priceCardOptionType = {
    option: string;
    checked: boolean;
}