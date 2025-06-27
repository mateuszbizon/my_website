import { defineQuery } from "next-sanity";

export const GET_SINGLE_POST_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        _id, publishedAt, title, body[], mainImage, subpagesAmount, daysMakingAmount, websiteLink, websiteName
    }    
`)