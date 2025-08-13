"use client"

import React from 'react'
import Container from '../ui/container'
import { PROJECT_WORK_STEPS } from '@/constants/projectWorkSteps'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import useShowHeading2 from '@/lib/hooks/useShowHeading2'

gsap.registerPlugin(ScrollTrigger)

function HowProjectWork() {
    useShowHeading2(".project-title", "#how-project-work")

  return (
    <section id='how-project-work' className='py-section-padding'>
        <Container>
            <h2 className='project-title heading2 text-center heading-margin-bottom'>Jak przebiega współpraca</h2>
            <div className='bg-primary text-background-light rounded-2xl p-5 md:p-10 space-y-15'>
                {PROJECT_WORK_STEPS.map((step, index) => (
                    <div className='flex flex-col lg:flex-row gap-5 lg:gap-10' key={step.content}>
                        <div>
                            <div className='size-20 rounded-xl bg-background-light text-foreground flex items-center justify-center'>
                                <span className='bigger-text'>{index + 1}</span>
                            </div>
                        </div>
                        <p className='bigger-text'>
                            {step.content}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default HowProjectWork