"use client"

import React from 'react'
import Container from '../ui/container'
import FreePriceForm from '../forms/FreePriceForm'
import useShowHeading2 from '@/lib/hooks/useShowHeading2'

function FreePriceSection() {
    useShowHeading2(".free-price-title", "#free-price")

  return (
    <section id='free-price' className='py-section-padding'>
        <Container>
            <h2 className='free-price-title heading2 text-center heading-margin-bottom'>Darmowa wycena strony internetowej</h2>
            <Container className='px-0 max-w-[800px]'>
                <FreePriceForm />
            </Container>
        </Container>
    </section>
  )
}

export default FreePriceSection