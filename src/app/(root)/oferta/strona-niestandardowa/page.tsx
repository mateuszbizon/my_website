import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { CUSTOM_WEB_SITE_OFFER } from '@/constants/offerInfo'
import React from 'react'

function CustomWebSitePage() {
  return (
    <>
        <SubPageHero title='Strona internetowa dla Twojego biznesu' />
        <OfferAbout title={CUSTOM_WEB_SITE_OFFER.title} description={CUSTOM_WEB_SITE_OFFER.description} features={CUSTOM_WEB_SITE_OFFER.list} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default CustomWebSitePage