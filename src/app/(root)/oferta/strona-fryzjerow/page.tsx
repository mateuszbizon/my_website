import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { BARBER_OFFER } from '@/constants/offerInfo'
import React from 'react'

function OfferBarberPage() {
  return (
    <>
        <SubPageHero title='Strona internetowa dla fryzjerów' />
        <OfferAbout title={BARBER_OFFER.title} description={BARBER_OFFER.description} features={BARBER_OFFER.list} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default OfferBarberPage