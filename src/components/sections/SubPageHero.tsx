"use client"

import React from 'react'
import Container from '../ui/container'
import SquareBg from '../ui/SquareBg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all'

type SubPageHeroProps = {
    title?: string;
}

gsap.registerPlugin(SplitText)

function SubPageHero({ title = "O mnie" }: SubPageHeroProps) {
    useGSAP(() => {
        const headingChars = new SplitText(".heading1", { type: "chars, words" })
        
        gsap.from(headingChars.chars, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "expo.out",
            stagger: 0.06
        })
    }, [])

  return (
    <header className='py-section-padding lg:py-[calc(theme(padding.section-padding)*2)] relative z-0'>
        <SquareBg />
        <Container>
            <h1 className='heading1 text-center'>{title}</h1>
        </Container>
    </header>
  )
}

export default SubPageHero