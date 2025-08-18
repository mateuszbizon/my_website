"use client"

import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'
import Link from 'next/link'
import SquareBg from '../ui/SquareBg'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)

function Hero() {
    useGSAP(() => {
        const headingChars = new SplitText(".heading1", { type: "chars, words" })
        const subtitleChars = new SplitText(".subtitle", { type: "lines" })
        
        gsap.from(headingChars.chars, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "expo.out",
            stagger: 0.06
        })

        gsap.from(subtitleChars.lines, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.2,
            delay: 1
        })

        gsap.fromTo(".button", {
            opacity: 0,
        }, {
            opacity: 1,
            stagger: 0.3,
            ease: "power1.in",
            duration: 1,
            delay: 1
        })
    }, [])

  return (
    <header className='relative py-section-padding lg:h-screen lg:py-0 z-0'>
        <BackgroundBeamsWithCollision>
            <Container>
                <div className='flex flex-col justify-center gap-5 md:gap-10 h-full text-center'>
                    <h1 className='heading1'>Strona internetowa dla <span className='text-primary'>Twojego biznesu</span></h1>
                    <p className='subtitle bigger-text'>
                        Tworzę nowoczesne strony dla firm, które nie tylko dobrze wyglądają, ale też skutecznie sprzedają. Zadbam również o widoczność Twojej wizytówki w Google, by lokalni klienci mogli Cię łatwo znaleźć.
                    </p>
                    <div className='flex justify-center gap-5 flex-wrap'>
                        <Button className='button' size={"lg"}>
                            <Link href={"/portfolio"}>
                                Zobacz
                            </Link>
                        </Button>
                        <Button className='button' size={"lg"} variant={"outline"}>
                            <Link href={"/oferta"}>
                                Sprawdź ofertę
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </BackgroundBeamsWithCollision>
        <SquareBg />
    </header>
  )
}

export default Hero