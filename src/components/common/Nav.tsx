"use client"

import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import useScroll from '@/lib/hooks/useScroll'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import NavCard from '../cards/NavCard'
import { NAV_ITEMS } from '@/constants/navItems'
import NavMobile from './NavMobile'
import Image from 'next/image'
import { LOGO } from '@/constants/images'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <nav className={`h-nav-height fixed top-0 w-full ${isScrolled ? "backdrop-blur-lg" : "bg-transparent"} z-40 transition duration-300`}>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div>
                    <Link href={"/"} title='Strona główna'>
                        <figure className='relative size-12'>
                            <Image src={LOGO.src} alt={LOGO.alt} fill />
                        </figure>
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
                    <Button asChild>
                        <Link href={"/darmowa-wycena"}>
                            Darmowa wycena
                        </Link>
                    </Button>
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav