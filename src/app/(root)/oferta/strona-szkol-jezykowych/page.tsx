import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import OfferPluses from '@/components/sections/OfferPluses'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { LANGUAGE_SCHOOL_OFFER, WEB_SITE_PLUSES } from '@/constants/offerInfo'
import React from 'react'

function LanguageSchoolPage() {
  return (
    <>
        <SubPageHero title='Strona internetowa dla szkół językowych' />
        <OfferAbout title={LANGUAGE_SCHOOL_OFFER.title} description={LANGUAGE_SCHOOL_OFFER.description} features={LANGUAGE_SCHOOL_OFFER.list} />
        <OfferPluses plusesList={WEB_SITE_PLUSES} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default LanguageSchoolPage