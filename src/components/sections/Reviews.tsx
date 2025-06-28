"use client"

import React from 'react'
import Container from '../ui/container'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import ReviewCard from '../cards/ReviewCard'
import { REVIEWS_LIST } from '@/constants/reviews'

function Reviews() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <section className='bg-primary py-section-padding text-background-light'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Opinie</h2>
            <Carousel
                opts={{
                    loop: true
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='lg:px-10 mb-10'
            >
                <CarouselContent>
                    {REVIEWS_LIST.map(item => (
                        <ReviewCard key={item.content} review={item} />
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden lg:inline-flex border-background-light hover:bg-foreground hover:border-foreground' />
                <CarouselNext className='hidden lg:inline-flex border-background-light hover:bg-foreground hover:border-foreground' />
            </Carousel>
        </Container>
    </section>
  )
}

export default Reviews