"use client"

import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import useScroll from '@/lib/hooks/useScroll'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import NavCard from '../cards/NavCard'
import { NAV_ITEMS } from '@/constants/navItems'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <nav className={`h-nav-height fixed top-0 w-full ${isScrolled ? "backdrop-blur-lg" : "bg-transparent"} z-40 transition duration-300`}>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div>
                    <Link href={"/"} title='Strona główna'>
                        <span className='text-lg'>MB</span>
                    </Link>
                </div>
                <div className='hidden lg:flex'>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className='flex gap-0'>
                            {NAV_ITEMS.map(item => (
                                <NavigationMenuItem key={item.label}>
                                    <NavCard item={item} />
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='hidden lg:block'>
                    <Button className='ml-2' asChild>
                        <Link href={"/darmowa-wycena"} target='_blank'>
                            Darmowa wycena
                        </Link>
                    </Button>
                </div>
                <div className='lg:hidden'>
                    {/* <NavMobile /> */}
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav