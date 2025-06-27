import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { GET_RECENT_POSTS_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostCard from '../cards/PostCard'

async function RecentPosts() {
    const posts = await client.withConfig({
        useCdn: false
    }).fetch(GET_RECENT_POSTS_QUERY)

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {posts.map(post => (
            <PostCard key={post._id} post={post} />
        ))}
    </div>
  )
}

export default RecentPosts