import React from 'react'
import Container from '../ui/container'
import { BanknoteArrowUp, CalendarArrowUp, PanelsTopLeft } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Offer() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-center'>Sprawdź co mogę zaoferować dla Ciebie lub Twojej firmy</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='offer-card group'>
                    <PanelsTopLeft className='offer-card-icon' />
                    <h3 className='heading3'>Strona internetowa</h3>
                    <p className='text-lg'>
                        Tworzę nowoczesne i responsywne strony internetowe dopasowane do potrzeb Twojej firmy. Dbam o estetykę i funkcjonalność.
                    </p>
                    <div className='flex justify-center'>
                        <Button asChild>
                            <Link href={"/"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='offer-card group'>
                    <CalendarArrowUp className='offer-card-icon' />
                    <h3 className='heading3'>Pozycjonowanie strony</h3>
                    <p className='text-lg'>
                        Zadbam o to, aby Twoja strona była widoczna w wynikach wyszukiwania Google i przyciągała wartościowych klientów. Stosuję skuteczne techniki SEO, które zwiększają ruch i poprawiają pozycję witryny.
                    </p>
                    <div className='flex justify-center'>
                        <Button asChild>
                            <Link href={"/"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='offer-card group'>
                    <BanknoteArrowUp className='offer-card-icon' />
                    <h3 className='heading3'>Pozycjonowanie wizytówki</h3>
                    <p className='text-lg'>
                        Optymalizuję wizytówki Google Moja Firma, aby były lepiej widoczne lokalnie i generowały więcej kontaktów. Wprowadzam odpowiednie treści, zdjęcia oraz słowa kluczowe, które zwiększają zasięg Twojej działalności.
                    </p>
                    <div className='flex justify-center'>
                        <Button asChild>
                            <Link href={"/"}>
                                Dowiedz się więcej
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Offer