import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import OfferPluses from '@/components/sections/OfferPluses'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { CUSTOM_WEB_SITE_OFFER, WEB_SITE_PLUSES } from '@/constants/offerInfo'
import React from 'react'

function CustomWebSitePage() {
  return (
    <>
        <SubPageHero title='Strona internetowa dla Twojego biznesu' />
        <OfferAbout title={CUSTOM_WEB_SITE_OFFER.title} description={CUSTOM_WEB_SITE_OFFER.description} features={CUSTOM_WEB_SITE_OFFER.list} />
        <OfferPluses plusesList={WEB_SITE_PLUSES} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default CustomWebSitePage