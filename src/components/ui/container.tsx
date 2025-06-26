import { cn } from '@/lib/utils'
import React, { ComponentProps, PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren & ComponentProps<"div">

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("h-full max-w-[1200px] mx-auto px-5", className)} {...props}>
        {children}
    </div>
  )
}

export default Container