import RecentPostsSection from '@/components/sections/RecentPostsSection'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function PortfolioPage() {
  return (
    <>
        <SubPageHero title='Moje projekty' />
        <RecentPostsSection />
    </>
  )
}

export default PortfolioPage