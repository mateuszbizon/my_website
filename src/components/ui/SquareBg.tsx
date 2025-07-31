import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type SquareBgProps = ComponentProps<"div">

function SquareBg({ className, ...props }: SquareBgProps) {
  return (
    <div
        className={cn(
        "absolute inset-0 opacity-70 -z-10",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        className
        )}
        {...props}
    />
  )
}

export default SquareBg