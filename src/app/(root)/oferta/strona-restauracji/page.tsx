import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import OfferPluses from '@/components/sections/OfferPluses'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { RESTAURANT_IMAGE } from '@/constants/images'
import { RESTAURANT_OFFER, WEB_SITE_PLUSES } from '@/constants/offerInfo'
import React from 'react'

function RestaurantPage() {
  return (
    <>
        <SubPageHero title='Strona restauracji' />
        <OfferAbout title={RESTAURANT_OFFER.title} description={RESTAURANT_OFFER.description} features={RESTAURANT_OFFER.list} image={RESTAURANT_IMAGE} />
        <OfferPluses plusesList={WEB_SITE_PLUSES} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default RestaurantPage