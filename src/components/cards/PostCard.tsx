import { GET_RECENT_POSTS_QUERYResult } from '@/sanity/types'
import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import { urlFor } from '@/sanity/lib/image'

type PostCardProps = {
    post: GET_RECENT_POSTS_QUERYResult[0]
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/${post.slug?.current}`} title={post.title || ""}>
        <div className='bg-background-light rounded-2xl border border-background shadow-xl shadow-background-dark hover:shadow-foreground transition overflow-hidden'>
            {post.mainImage && (
                <figure className='relative aspect-video'>
                    <Image src={urlFor(post.mainImage).url()} alt={post.mainImage.alt || ""} fill className='object-contain' />
                </figure>
            )}
            <div className='p-5'>
                <p className='bigger-text text-center'>{post.title}</p>
            </div>
        </div>
    </Link>
  )
}

export default PostCard