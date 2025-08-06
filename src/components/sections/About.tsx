import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import Image from 'next/image'
import { ABOUT_IMAGE } from '@/constants/images'
import { Button } from '../ui/button'

function About() {
  return (
    <section className='py-section-padding bg-gradient-to-br from-background-light to-background'>
        <Container>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-7'>
                    <h2 className='heading2'>Poznaj twórcę stron internetowych</h2>
                    <div className='space-y-5 text-lg'>
                        <p>
                            <strong>Cześć! Nazywam się Mateusz Bizoń i zajmuję się projektowaniem i tworzeniem stron internetowych.</strong> Od 2019 zacząłem swoją przygodę z tworzeniem stron internetowych, a od 2025 roku postanowiłem skupić się na tym bardziej na poważnie, oferując swoje usługi dla firm.
                        </p>
                        <p>
                            W swojej pracy stawiam na prostotę, nowoczesność i czytelność. Moim celem jest dostarczenie Ci rozwiązania, które będzie nie tylko estetyczne, ale także funkcjonalne i łatwe w obsłudze.
                        </p>
                        <p>
                            <strong>Masz dla mnie zlecenie?</strong>{" "}
                            <Link href={"/darmowa-wycena"} className={`link text-lg`}>
                                Zapraszam na bezpłatną konsultację
                            </Link>
                        </p>
                        <div className='flex gap-5 flex-wrap'>
                            <Button asChild>
                                <Link href={"/portfolio"}>
                                    Zobacz portfolio
                                </Link>
                            </Button>
                            <Button variant={"outline"} asChild>
                                <Link href={"/oferta"}>
                                    Sprawdź ofertę
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div>
                    <figure className='relative aspect-square max-w-[800px] mx-auto'>
                        <Image src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} fill className='object-cover rounded-4xl' />
                        <span className='absolute -bottom-10 -translate-x-1/2 left-1/2 bg-primary text-background-light p-5 rounded-md text-center text-lg'>
                            <span className='text-3xl md:text-4xl font-medium'>5+</span> <br /> lat doświadczenia
                        </span>
                    </figure>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About