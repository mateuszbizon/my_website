import React from 'react'

function PostsLoading() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='bg-background-light rounded-2xl border border-background overflow-hidden animate-pulse pt-5'>
            <div className=''>
                <div className='bg-muted/50 aspect-video'></div>
                <div className='p-5'>
                    <div className='bg-muted/50 rounded-4xl h-4 w-full'></div>
                </div>
            </div>
        </div>
        <div className='bg-background-light rounded-2xl border border-background overflow-hidden animate-pulse pt-5'>
            <div className=''>
                <div className='bg-muted/50 aspect-video'></div>
                <div className='p-5'>
                    <div className='bg-muted/50 rounded-4xl h-4 w-full'></div>
                </div>
            </div>
        </div>
        <div className='bg-background-light rounded-2xl border border-background overflow-hidden animate-pulse pt-5'>
            <div className=''>
                <div className='bg-muted/50 aspect-video'></div>
                <div className='p-5'>
                    <div className='bg-muted/50 rounded-4xl h-4 w-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostsLoading