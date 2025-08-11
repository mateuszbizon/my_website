import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Image as ImageType } from '@/types'
import { BARBER_IMAGE } from '@/constants/images'
import Image from 'next/image'

type OfferAboutProps = {
    title: string;
    description: string;
    features: string[];
    image?: ImageType
}

function OfferAbout({ title, description, features, image = BARBER_IMAGE }: OfferAboutProps) {
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

                <div>
                    <figure className='relative aspect-square max-w-[800px] mx-auto'>
                        <Image src={image.src} alt={image.alt} fill className='object-cover rounded-4xl' />
                    </figure>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default OfferAbout