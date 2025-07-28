import React from 'react'
import Container from '../ui/container'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'
import Link from 'next/link'

function Hero() {
  return (
    <header className='relative py-section-padding lg:h-screen lg:py-0 z-0'>
        <BackgroundBeamsWithCollision>
            <Container>
                <div className='flex flex-col justify-center gap-5 md:gap-10 h-full text-center'>
                    <h1 className='heading1'>Strona internetowa dla <span className='text-primary'>Twojego biznesu</span></h1>
                    <p className='bigger-text'>
                        Tworzę nowoczesne strony dla firm, które nie tylko dobrze wyglądają, ale też skutecznie sprzedają. Zadbam również o widoczność Twojej wizytówki w Google, by lokalni klienci mogli Cię łatwo znaleźć.
                    </p>
                    <div className='flex justify-center gap-5 flex-wrap'>
                        <Button size={"lg"}>
                            <Link href={"/portfolio"}>
                                Zobacz portfolio
                            </Link>
                        </Button>
                        <Button size={"lg"} variant={"outline"}>
                            <Link href={"/oferta"}>
                                Sprawdź ofertę
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </BackgroundBeamsWithCollision>
        <div
            className={cn(
            "absolute inset-0 opacity-70 -z-10",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            )}
        />
    </header>
  )
}

export default Hero