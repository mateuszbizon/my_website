import axios from "axios"

export const AIRTABLE_API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AIRTABLE_URL
})

AIRTABLE_API.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`

    return config
})