import React from 'react'
import Container from '../ui/container'
import { NAV_ITEMS, SERVICE_ITEMS } from '@/constants/navItems'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { EMAIL, PHONE } from '@/constants'
import { LOGO } from '@/constants/images'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='pt-section-padding pb-7 bg-foreground text-white'>
        <Container className='max-w-[1400px]'>
            <div className='grid md:grid-cols-[repeat(auto-fit,_280px)] gap-10 md:gap-20'>
                <div className='space-y-4 text-center md:text-left'>
                    <figure className='relative size-16 mx-auto md:mx-0'>
                        <Image src={LOGO.src} alt={LOGO.alt} fill />
                    </figure>
                    <p className='md:text-lg'>
                        <em>
                            Tworzę nowoczesne strony dla firm, które nie tylko dobrze wyglądają, ale też skutecznie sprzedają. Zadbam również o widoczność Twojej wizytówki w Google, by lokalni klienci mogli Cię łatwo znaleźć.
                        </em>
                    </p>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Nawigacja</p>
                    <nav>
                        <ul className='space-y-2'>
                            {NAV_ITEMS.map(item => {
                                if (item.isLink) return (
                                    <li key={item.label}>
                                        <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )

                                if (!item.isLink && item.href) return (
                                    <li key={item.label}>
                                        <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Oferta</p>
                    <nav>
                        <ul className='space-y-2'>
                            {SERVICE_ITEMS.map(item => (
                                <li key={item.label}>
                                    <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Dane kontaktowe</p>
                    <div className='space-y-5'>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/50' asChild>
                                <Link href={`tel:${PHONE}`}>
                                    <Phone /> {PHONE}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/50' asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    <Mail /> {EMAIL}
                                </Link>
                            </Button>
                        </div>
                        {/* <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                            <Button size={"icon"} asChild>
                                <Link href={INSTA} target='_blank' title='Instagram'>
                                    <Instagram />
                                    <span className='sr-only'>Instagram</span>
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='mt-section-padding flex flex-col sm:flex-row justify-between gap-3 items-center'>
                <p>
                    &copy; {new Date().getFullYear()} | <span className='font-semibold'>Mateusz Bizoń</span>
                </p>
                <p>
                    <Button variant={"link"} size={"link"} className='text-white hover:text-white/50' asChild>
                        <Link href="/polityka-prywatnosci">
                            Polityka prywatności
                        </Link>
                    </Button>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer