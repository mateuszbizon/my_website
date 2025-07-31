import React from 'react'
import Container from '../ui/container'
import SquareBg from '../ui/SquareBg';

type SubPageHeroProps = {
    title?: string;
}

function SubPageHero({ title = "O mnie" }: SubPageHeroProps) {
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