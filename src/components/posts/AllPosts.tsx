import { client } from '@/sanity/lib/client'
import { GET_ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import PostCard from '../cards/PostCard'

async function AllPosts() {
    const posts = await client.withConfig({
        useCdn: false
    }).fetch(GET_ALL_POSTS_QUERY)

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {posts.map(post => (
            <PostCard key={post._id} post={post} />
        ))}
    </div>
  )
}

export default AllPosts