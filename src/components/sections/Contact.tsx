import React from 'react'
import Container from '../ui/container'
import ContactForm from '../forms/ContactForm'
import { Mail, Phone } from 'lucide-react'
import { EMAIL, PHONE } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ABOUT_IMAGE } from '@/constants/images'

function Contact() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Skontaktuj się ze mną</h2>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
                <div>
                    <div className='lg:w-[400px] rounded-2xl bg-background p-7 flex flex-col gap-10'>
                        <div className='space-y-8'>
                            <figure className='relative size-50 rounded-full overflow-hidden mx-auto'>
                                <Image src={ABOUT_IMAGE.src} alt={ABOUT_IMAGE.alt} fill className='object-cover' />
                            </figure>
                            <p className='text-center little-bigger-text font-medium'>Mateusz Bizoń</p>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex gap-3 items-center'>
                                <div className='p-3 rounded-xl bg-background-dark'>
                                    <Mail className='size-8' />
                                </div>
                                <span className='text-lg'>Adres email</span>
                            </div>
                            <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/70' asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    {EMAIL}
                                </Link>
                            </Button>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex gap-3 items-center'>
                                <div className='p-3 rounded-xl bg-background-dark'>
                                    <Phone className='size-8' />
                                </div>
                                <span className='text-lg'>Telefon</span>
                            </div>
                            <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/70' asChild>
                                <Link href={`tel:${PHONE}`}>
                                    {PHONE}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                
                <div className='grow'>
                    <Container className='max-w-[600px] px-0'>
                        <ContactForm />
                    </Container>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact