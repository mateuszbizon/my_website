import React from 'react'
import Container from '../ui/container'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'

function Hero() {
  return (
    <header className='relative h-screen z-0'>
        <BackgroundBeamsWithCollision>
            <Container>
                <div className='flex flex-col justify-center gap-5 md:gap-10 h-full text-center'>
                    <h1 className='heading1'>Strona internetowa dla <span className='text-primary'>Twojego biznesu</span></h1>
                    <p className='bigger-text'>
                        Tworzymy nowoczesne i responsywne strony internetowe, które pomogą Ci wyróżnić się w sieci. 
                        Nasze rozwiązania są dostosowane do Twoich potrzeb i oczekiwań.
                    </p>
                    <div className='flex justify-center gap-5 flex-wrap'>
                        <Button size={"lg"}>
                            Kliknij
                        </Button>
                        <Button size={"lg"} variant={"outline"}>
                            Kliknij2
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