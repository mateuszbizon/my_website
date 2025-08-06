import About from '@/components/sections/About'
import HowProjectWork from '@/components/sections/HowProjectWork'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function AboutPage() {
  return (
    <>
        <SubPageHero />
        <About />
        <HowProjectWork />
    </>
  )
}

export default AboutPage