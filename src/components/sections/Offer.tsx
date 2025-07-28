import React from 'react'
import Container from '../ui/container'
import { Languages, LayoutDashboard, MapPin, Scissors, UtensilsCrossed } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Offer() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 heading-margin-bottom text-center'>Sprawdź co mogę zaoferować dla Ciebie lub Twojej firmy</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='offer-card group'>
                    <Scissors className='offer-card-icon' />
                    <h3 className='heading3'>Strony dla fryzjerów</h3>
                    <p className='text-lg'>
                        Profesjonalna strona internetowa dla salonów fryzjerskich z łatwą prezentacją oferty, cennika i możliwością rezerwacji wizyt online.
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
                    <Languages className='offer-card-icon' />
                    <h3 className='heading3'>Strony dla szkół językowych</h3>
                    <p className='text-lg'>
                        Strona idealna dla szkół językowych – z sekcją kursów, grafikami zajęć i możliwością zapisu na lekcje próbne.
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
                    <UtensilsCrossed className='offer-card-icon' />
                    <h3 className='heading3'>Strony dla restauracji</h3>
                    <p className='text-lg'>
                        Atrakcyjne wizualnie strony restauracji z menu, zdjęciami dań i integracją z Google Maps czy systemem zamawiania.
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
                    <LayoutDashboard className='offer-card-icon' />
                    <h3 className='heading3'>Strony niestandardowe</h3>
                    <p className='text-lg'>
                         Tworzę również strony dopasowane do indywidualnych potrzeb Twojego biznesu – od projektu po wdrożenie.
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
                    <MapPin className='offer-card-icon' />
                    <h3 className='heading3'>Pozycjonowanie wizytówki Google</h3>
                    <p className='text-lg'>
                        Zadbam o to, aby Twoja firma była dobrze widoczna w Google – optymalizacja wizytówki Google Moja Firma krok po kroku.
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