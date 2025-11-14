import { Body, Button, Head, Heading, Html, Section, Tailwind, Text } from "@react-email/components";
import React from 'react'

type InfoEmailProps = {
    name: string
}

function InfoEmail({ name }: InfoEmailProps) {
  return (
    <Html>
        <Head />
        <Tailwind>
        <Body className="text-[#474554]">
            <Section className='space-y-5'>
                <Heading className="text-3xl font-bold">Nowy klient!</Heading>
                <Text className="text-xl font-medium">Osoba o imieniu {name} coś od Ciebie chce ;)</Text>
                <Button href={"https://airtable.com/apppRBMAXdruP7umw/tblrSBr8kd9OrXxqV/viw9rmu5yAfWejur3?blocks=hide"} className="bg-[#7E78D2] text-[#FBF7FF] rounded-xl text-base px-6 py-3">
                    Link do Airtable
                </Button>
            </Section>
        </Body>
        </Tailwind>
    </Html>
  )
}

export default InfoEmail