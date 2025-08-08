import { Offer, OfferPluses } from "@/types";
import { Briefcase, Clock, Database, Globe, LayoutDashboard, LineChart, Monitor } from "lucide-react";

export const BARBER_OFFER: Offer = {
    title: "Strona internetowa dla salonu fryzjerskiego, która przyciąga klientów",
    description: "Profesjonalna witryna, która podkreśli styl Twojego salonu i pozwoli klientom szybko umówić się na wizytę.",
    list: [
        "Strona główna z prezentacją salonu i oferty",
        "Cennik usług",
        "Galeria zdjęć fryzur i metamorfoz",
        "Możliwość rezerwacji wizyt online np. z Booksy",
        "Opinie klientów",
        "Dane kontaktowe z mapą dojazdu"
    ]
}

export const LANGUAGE_SCHOOL_OFFER: Offer = {
    title: "Nowoczesna strona dla szkoły językowej",
    description: "Witryna, która w przejrzysty sposób zaprezentuje Twoje kursy, harmonogram i zachęci do zapisów",
    list: [
        "Strona główna z przedstawieniem szkoły",
        "Oferta kursów z cenami i poziomami",
        "Harmonogram zajęć",
        "Opinie uczniów",
        "Formularz zapisu online",
        "Kontakt i mapa dojazdu"
    ]
}

export const RESTAURANT_OFFER: Offer = {
    title: "Strona internetowa restauracji, która zwiększa liczbę rezerwacji",
    description: "Apetyczna prezentacja menu i klimatu lokalu w sieci, dostępna na każdym urządzeniu.",
    list: [
        "Strona główna z opisem restauracji",
        "Menu w wersji online",
        "Galeria zdjęć potraw i wnętrza",
        "Opinie gości",
        "Możliwość zamawiania online np. z Glovo",
        "Lokalizacja i kontakt"
    ]
}

export const CUSTOM_WEB_SITE_OFFER: Offer = {
    title: "Strona internetowa szyta na miarę Twojego biznesu",
    description: "Indywidualny projekt dopasowany do Twojej branży, celów i budżetu.",
    list: [
        "Strona główna z najważniejszymi informacjami",
        "Oferta lub portfolio",
        "Formularze kontaktowe lub rezerwacyjne",
        "Opinie klientów",
        "Blog lub aktualności",
        "Integracje z narzędziami (np. systemy rezerwacji, płatności online)"
    ]
}

export const GOOGLE_POSITION_OFFER: Offer = {
    title: "Bądź widoczny w Google i przyciągaj lokalnych klientów",
    description: "Kompleksowa optymalizacja Twojej wizytówki Google Moja Firma, aby łatwiej docierać do osób w Twojej okolicy.",
    list: [
        "Uzupełnienie i optymalizacja wszystkich danych",
        "Dodanie zdjęć i grafik przyciągających uwagę",
        "Wybór odpowiednich kategorii działalności",
        "Publikowanie aktualności i ofert",
        "Optymalizacja pod kątem słów kluczowych",
    ]
}

export const WEB_SITE_PLUSES: OfferPluses[] = [
    {
        title: "Szerszy zasięg",
        description: "Strona internetowa otwiera Twoją firmę na klientów spoza lokalnego rynku, umożliwiając dotarcie do nowych odbiorców.",
        icon: Globe
    },
    {
        title: "Dostępność 24/7",
        description: "Twoja witryna pracuje dla Ciebie przez całą dobę – klienci mogą zapoznać się z ofertą i skontaktować o dowolnej porze.",
        icon: Clock
    },
    {
        title: "Wzmacnianie wizerunku",
        description: "Estetyczny projekt sprawia, że firma jest postrzegana jako nowoczesna, wiarygodna i profesjonalna.",
        icon: Briefcase
    },
    {
        title: "Przewaga konkurencyjna",
        description: "Obecność w internecie daje Ci przewagę nad tymi, którzy wciąż opierają się wyłącznie na tradycyjnej reklamie.",
        icon: LineChart
    },
    {
        title: "Aktualny design",
        description: "Nowoczesna strona pokazuje, że firma nadąża za trendami i potrafi dostosować się do zmieniających się potrzeb klientów.",
        icon: LayoutDashboard
    },
    {
        title: "Analiza i rozwój",
        description: "Witryna umożliwia zbieranie danych o odwiedzających, co pomaga w doskonaleniu oferty i planowaniu dalszego rozwoju.",
        icon: Database
    },
]