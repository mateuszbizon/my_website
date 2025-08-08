import React from 'react'
import Container from '../ui/container'
import Shadow from '../ui/shadow'
import { OfferPluses as OfferPlusesType } from '@/types';

type OfferPlusesProps = {
    title?: string;
    plusesList: OfferPlusesType[]
}

function OfferPluses({ title = "Dlaczego warto zlecić mi projekt strony internetowej?", plusesList }: OfferPlusesProps) {
  return (
    <section className='py-section-padding bg-[url(/office_img.jpg)] bg-cover bg-center bg-no-repeat bg-fixed relative z-0 text-background-light'>
        <Shadow />
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>{title}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16'>
                {plusesList.map(item => (
                    <div className='space-y-5 text-center' key={item.title}>
                        <item.icon className='mx-auto size-10 text-primary' />
                        <h3 className='bigger-text'>{item.title}</h3>
                        <p className=''>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default OfferPluses