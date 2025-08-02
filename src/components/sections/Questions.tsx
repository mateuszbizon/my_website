import React from 'react'
import Container from '../ui/container'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { QUESTIONS } from '@/constants/questions'

function Questions() {
  return (
    <section className='py-section-padding'>
        <Container className='max-w-3xl'>
            <h2 className='heading2 text-center heading-margin-bottom'>Najczęściej zadawane pytania</h2>
            <Accordion type="single" collapsible>
                {QUESTIONS.map(item => (
                    <AccordionItem value={item.question} key={item.question}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>
    </section>
  )
}

export default Questions