import React, { Suspense } from 'react'
import Container from '../ui/container'
import AllPosts from '../posts/AllPosts'
import PostsLoading from '../loadings/PostsLoading'

function AllPostsSection() {
  return (
    <section className='py-section-padding bg-muted/50'>
        <Container>
            <h2 className='heading2 mb-7 text-center'>Portfolio</h2>
            <p className='bigger-text text-center heading-margin-bottom'>
                Poniżej przedstawiam wszystkie moje projekty
            </p>
            <Suspense fallback={<PostsLoading />}>
                <AllPosts />
            </Suspense>
        </Container>
    </section>
  )
}

export default AllPostsSection