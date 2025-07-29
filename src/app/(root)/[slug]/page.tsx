import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import { cn } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { GET_SINGLE_POST_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
}

async function PostPage({ params }: Props) {
    const { slug } = await params
    const post = await client.withConfig({
        useCdn: false
    }).fetch(GET_SINGLE_POST_QUERY, { slug })

    if (!post) return notFound()

  return (
    <>
        <header className='relative pt-section-padding pb-[calc(theme(padding.section-padding)*3)] z-0'>
            <Container>
                <h1 className='heading1 text-center'>{post.title}</h1>
            </Container>
            <div
                className={cn(
                "absolute inset-0 opacity-70 -z-10",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                )}
            />
        </header>
        <section className='pb-section-padding'>
            <Container>
                {post.mainImage && (
                    <figure className='aspect-video relative -mt-40 md:-mt-30 rounded-xl overflow-hidden'>
                        <Image src={urlFor(post.mainImage).url()} alt={post.mainImage.alt || ""} fill className='object-contain' />
                    </figure>
                )}
                <div className='mt-20 flex flex-col md:flex-row gap-5'>
                    <div className='grow'>
                        <div className='prose'>
                            {Array.isArray(post.body) && <PortableText value={post.body} />}
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 justify-center md:w-1/3 -order-1 md:order-2 bg-foreground text-background-light p-7 rounded-2xl'>
                        <div className='space-y-1'>
                            <p className='text-xl font-semibold'>Adres strony</p>
                            <p className='text-lg font-medium'>
                                <Link href={post.websiteLink || "#"} target='_blank'>
                                    {post.websiteName}
                                </Link>
                            </p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-xl font-semibold'>Ilość podstron</p>
                            <p className='text-lg font-medium'>{post.subpagesAmount} podstron</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-xl font-semibold'>Data opublikowania</p>
                            <p className='text-lg font-medium'>{post.publishedAt?.split("T")[0]}</p>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-xl font-semibold'>Czas realizacji</p>
                            <p className='text-lg font-medium'>{post.daysMakingAmount} dni</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section className='py-section-padding bg-gradient-to-br from-background-light to-background'>
            <Container>
                <h2 className='heading2 heading-margin-bottom text-center'>Podoba Ci się ten projekt?</h2>
                <p className='bigger-text text-center mb-10'>
                    Rozwijasz firmę i zależy Ci na tym, aby była profesjonalna, rozpoznawalna i widoczna dla Twoich klientów? <strong>Zaprojektuję dla Ciebie stronę internetową, która zachęci potencjalnych klientów do zakupu i zwiększy Twoją konkurencyjność na rynku.</strong>
                </p>
                <div className='flex justify-center gap-5 flex-wrap'>
                    <Button className='md:text-lg' size={"lg"} asChild>
                        <Link href={"/"}>
                            Zapytaj o ofertę
                        </Link>
                    </Button>
                    <Button className='md:text-lg' size={"lg"} variant={"outline"} asChild>
                        <Link href={"/"}>
                            Portfolio
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    </>
  )
}

export default PostPage