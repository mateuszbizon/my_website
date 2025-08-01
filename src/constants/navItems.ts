import { NavItem, NavLink } from "@/types";

export const SERVICE_ITEMS: NavLink[] = [
    {
        label: "Strona fryzjerów",
        href: "/oferta/strona-fryzjerow"
    },
    {
        label: "Strona szkół językowych",
        href: "/oferta/strona-szkol-jezykowych"
    },
    {
        label: "Strona restauracji",
        href: "/oferta/strona-restauracji"
    },
    {
        label: "Strona niestandardowa",
        href: "/oferta/strona-niestandardowa"
    },
    {
        label: "Pozycjonowanie wizytówki",
        href: "/oferta/pozycjonowanie-wizytowki"
    },
]

export const NAV_ITEMS: NavItem[] = [
    {
        label: "O mnie",
        isLink: true,
        href: "/o-mnie"
    },
    {
        label: "Oferta",
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