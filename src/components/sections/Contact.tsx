import React from 'react'
import Container from '../ui/container'
import ContactForm from '../forms/ContactForm'

function Contact() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Skontaktuj się ze mną</h2>
            <Container className='max-w-[600px] px-0'>
                <div>
                    <ContactForm />
                </div>
            </Container>
        </Container>
    </section>
  )
}

export default Contact