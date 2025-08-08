import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type ShadowProps = ComponentProps<"div">

function Shadow({ className, ...props }: ShadowProps) {
  return (
    <div className={cn('absolute inset-0 bg-black/70 -z-10', className)} {...props}></div>
  )
}

export default Shadow