import { Body, Button, Head, Heading, Html, Section, Tailwind, Text } from "@react-email/components";
import React from 'react'

type NewFreePriceEmailProps = {
    name: string
}

function NewFreePriceEmail({ name }: NewFreePriceEmailProps) {
  return (
    <Html>
        <Head />
        <Tailwind>
        <Body className="text-[#474554]">
            <Section className='space-y-5'>
                <Heading className="text-3xl font-bold">Nowa wycena!</Heading>
                <Text className="text-xl font-medium">Osoba o imieniu {name} prosi Cię o wycenę ;)</Text>
                <Button href={"https://airtable.com/apppRBMAXdruP7umw/tblaeV7Vsa5FWlN9q/viwfHat2q7nncHZOn?blocks=hide"} className="bg-[#7E78D2] text-[#FBF7FF] rounded-xl text-base px-6 py-3">
                    Link do Airtable
                </Button>
            </Section>
        </Body>
        </Tailwind>
    </Html>
  )
}

export default NewFreePriceEmail