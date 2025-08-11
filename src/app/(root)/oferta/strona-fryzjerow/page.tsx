import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import OfferPluses from '@/components/sections/OfferPluses'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { BARBER_IMAGE } from '@/constants/images'
import { BARBER_OFFER, WEB_SITE_PLUSES } from '@/constants/offerInfo'
import React from 'react'

function OfferBarberPage() {
  return (
    <>
        <SubPageHero title='Strona internetowa dla fryzjerów' />
        <OfferAbout title={BARBER_OFFER.title} description={BARBER_OFFER.description} features={BARBER_OFFER.list} image={BARBER_IMAGE} />
        <OfferPluses plusesList={WEB_SITE_PLUSES} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default OfferBarberPage