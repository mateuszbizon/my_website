"use client"

import React from 'react'
import Container from '../ui/container'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import ReviewCard from '../cards/ReviewCard'
import { REVIEWS_LIST } from '@/constants/reviews'
import { Button } from '../ui/button'
import Link from 'next/link'
import useShowHeading2 from '@/lib/hooks/useShowHeading2'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Reviews() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    useShowHeading2(".reviews-title", "#reviews")

  return (
    <section id='reviews' className='bg-primary py-section-padding text-background-light'>
        <Container>
            <h2 className='reviews-title heading2 text-center heading-margin-bottom'>Co inni mówią o mnie</h2>
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
            <div className='flex justify-center'>
                <Button variant={"secondary"} size={"lg"} asChild>
                    <Link href={"https://www.facebook.com/profile.php?id=61564441419761&sk=reviews"} target='_blank'>
                        Wszystkie opinie
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default Reviews