import AllPostsSection from '@/components/sections/AllPostsSection'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function PortfolioPage() {
  return (
    <>
        <SubPageHero title='Moje projekty' />
        <AllPostsSection />
    </>
  )
}

export default PortfolioPage