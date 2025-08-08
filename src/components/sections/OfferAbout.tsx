import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

type OfferAboutProps = {
    title: string;
    description: string;
    features: string[];
}

function OfferAbout({ title, description, features }: OfferAboutProps) {
  return (
    <section className='py-section-padding bg-gradient-to-br from-background-light to-background'>
        <Container>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-7'>
                    <h2 className='heading2'>{title}</h2>
                    <div className='space-y-5 text-lg'>
                        <p className='little-bigger-text'>
                            {description}
                        </p>
                        <ul className='space-y-3 list-inside list-disc'>
                            {features.map((feature) => (
                                <li key={feature}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className='flex gap-5 flex-wrap'>
                            <Button variant={"outline"} asChild>
                                <Link href={"/darmowa-wycena"}>
                                    Zapytaj o ofertę
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href={"/portfolio"}>
                                    Zobacz portfolio
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <figure className='relative aspect-square max-w-[800px] mx-auto'>
                        <Image src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} fill className='object-cover rounded-4xl' />
                        <span className='absolute -bottom-10 -translate-x-1/2 left-1/2 bg-primary text-background-light p-5 rounded-md text-center text-lg'>
                            <span className='text-3xl md:text-4xl font-medium'>5+</span> <br /> lat doświadczenia
                        </span>
                    </figure>
                </div> */}
            </div>
        </Container>
    </section>
  )
}

export default OfferAbout