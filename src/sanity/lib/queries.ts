import { defineQuery } from "next-sanity";

export const GET_SINGLE_POST_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        _id, publishedAt, title, body[], mainImage, subpagesAmount, daysMakingAmount, websiteLink, websiteName
    }    
`)

export const GET_RECENT_POSTS_QUERY = defineQuery(`
    *[_type == "post"] | order(publishedAt desc)[0...9] {
        _id, title, slug, mainImage
    }    
`)

export const GET_ALL_POSTS_QUERY = defineQuery(`
    *[_type == "post"] | order(publishedAt desc) {
        _id, title, slug, mainImage, _createdAt
    }    
`)