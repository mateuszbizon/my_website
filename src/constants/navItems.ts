import { NavItem, NavLink } from "@/types";

export const SERVICE_ITEMS: NavLink[] = [
    {
        label: "Strona fryzjerów",
        href: "/strona-fryzjerow"
    },
    {
        label: "Strona szkół językowych",
        href: "/strona-szkol-jezykowych"
    },
    {
        label: "Strona restauracji",
        href: "/strona-restauracji"
    },
    {
        label: "Strona niestandardowa",
        href: "/strona-niestandardowa"
    },
    {
        label: "Pozycjonowanie wizytówki",
        href: "/pozycjonowanie-wizytowki"
    },
]

export const NAV_ITEMS: NavItem[] = [
    {
        label: "O mnie",
        isLink: true,
        href: "/o-mnie"
    },
    {
        label: "Usługi",
        isLink: false,
        menu: SERVICE_ITEMS
    },
    {
        label: "Portfolio",
        isLink: true,
        href: "/portfolio"
    },
    {
        label: "Opinie",
        isLink: true,
        href: "/opinie"
    },
    {
        label: "Kontakt",
        isLink: true,
        href: "/kontakt"
    },
    {
        label: "Pytania",
        isLink: true,
        href: "/pytania"
    },
]