import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { LANGUAGE_SCHOOL_OFFER } from '@/constants/offerInfo'
import React from 'react'

function LanguageSchoolPage() {
  return (
    <>
        <SubPageHero title='Strona internetowa dla szkół językowych' />
        <OfferAbout title={LANGUAGE_SCHOOL_OFFER.title} description={LANGUAGE_SCHOOL_OFFER.description} features={LANGUAGE_SCHOOL_OFFER.list} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default LanguageSchoolPage