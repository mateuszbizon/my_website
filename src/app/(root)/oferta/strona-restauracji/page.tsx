import HowProjectWork from '@/components/sections/HowProjectWork'
import OfferAbout from '@/components/sections/OfferAbout'
import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import { RESTAURANT_OFFER } from '@/constants/offerInfo'
import React from 'react'

function RestaurantPage() {
  return (
    <>
        <SubPageHero title='Strona restauracji' />
        <OfferAbout title={RESTAURANT_OFFER.title} description={RESTAURANT_OFFER.description} features={RESTAURANT_OFFER.list} />
        <HowProjectWork />
        <Questions />
    </>
  )
}

export default RestaurantPage