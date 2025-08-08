import { LucideIcon } from "lucide-react";

export type Image = {
    src: string;
    alt: string;
}

export type Review = {
    name: string;
	content: string;
}

export type NavLink = {
    label: string;
    href: string;
}

export type NavItem = {
    label: string;

} & ({
    isLink: true;
    href: string;
} | {
    isLink: false;
    menu: NavLink[];
    href?: string;
})

export type Question = {
    question: string;
    answer: string;
}

export type Offer = {
    title: string;
    description: string;
    list: string[];
}

export type OfferPluses = {
    title: string;
    description: string;
    icon: LucideIcon;
}