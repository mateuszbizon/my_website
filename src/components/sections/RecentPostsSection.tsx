import React, { Suspense } from 'react'
import Container from '../ui/container'
import RecentPosts from '../posts/RecentPosts'

function RecentPostsSection() {
  return (
    <section className='py-section-padding bg-muted/50'>
        <Container>
            <h2 className='heading2 mb-7 text-center'>Portfolio</h2>
            <p className='bigger-text text-center heading-margin-bottom'>
                Poniżej przedstawiam kilka moich ostatnich projektów
            </p>
            <Suspense>
                <RecentPosts />
            </Suspense>
        </Container>
    </section>
  )
}

export default RecentPostsSection