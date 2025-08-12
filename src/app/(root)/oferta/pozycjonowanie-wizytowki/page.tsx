import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import OfferPluses from '@/components/sections/OfferPluses'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { GOOGLE_POSITION_IMAGE } from '@/constants/images'
import { GOOGLE_POSITION_OFFER, GOOGLE_POSITION_PLUSES } from '@/constants/offerInfo'
import React from 'react'

function GooglePositionPage() {
  return (
    <>
        <SubPageHero title='Pozycjonowanie wizytówki Google' />
        <OfferAbout title={GOOGLE_POSITION_OFFER.title} description={GOOGLE_POSITION_OFFER.description} features={GOOGLE_POSITION_OFFER.list} image={GOOGLE_POSITION_IMAGE} />
        <OfferPluses plusesList={GOOGLE_POSITION_PLUSES} title='Dlaczego warto pozycjonować wizytówkę Google?' />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default GooglePositionPage