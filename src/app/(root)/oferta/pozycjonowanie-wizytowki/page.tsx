import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { GOOGLE_POSITION_OFFER } from '@/constants/offerInfo'
import React from 'react'

function GooglePositionPage() {
  return (
    <>
        <SubPageHero title='Pozycjonowanie wizytówki Google' />
        <OfferAbout title={GOOGLE_POSITION_OFFER.title} description={GOOGLE_POSITION_OFFER.description} features={GOOGLE_POSITION_OFFER.list} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default GooglePositionPage