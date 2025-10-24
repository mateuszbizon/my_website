import { CONSENT_DONT_CHECKED, EMAIL_INCORRECT, INPUT_EMPTY } from "@/constants/validations"
import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().min(1, INPUT_EMPTY),
    email: z.string().min(1, INPUT_EMPTY).email(EMAIL_INCORRECT),
    phone: z.string().min(1, INPUT_EMPTY),
    message: z.string().min(1, INPUT_EMPTY),
    consent: z.boolean().refine(val => val === true, { message: CONSENT_DONT_CHECKED })
})

export type ContactSchema = z.infer<typeof contactSchema>