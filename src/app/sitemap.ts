import { client } from '@/sanity/lib/client'
import { GET_ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import type { MetadataRoute } from 'next'
 
export const baseUrl = "https://www.mateuszbizonweb.pl"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await client.withConfig({
        useCdn: false
    }).fetch(GET_ALL_POSTS_QUERY)

    const postLinks = posts.map(post => ({
        url: `${baseUrl}/${post.slug?.current}`,
        lastModified: post._createdAt,
        priority: 0.8,
    }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/darmowa-wycena`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-mnie`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/opinie`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pytania`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...postLinks
  ]
}