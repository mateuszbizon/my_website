import React from 'react'
import Container from '../ui/container'
import FreePriceForm from '../forms/FreePriceForm'

function FreePriceSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Darmowa wycena strony internetowej</h2>
            <Container className='px-0 max-w-[800px]'>
                <FreePriceForm />
            </Container>
        </Container>
    </section>
  )
}

export default FreePriceSection