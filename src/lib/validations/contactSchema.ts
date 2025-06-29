import { EMAIL_INCORRECT, INPUT_EMPTY } from "@/constants/validations"
import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().min(1, INPUT_EMPTY),
    email: z.string().min(1, INPUT_EMPTY).email(EMAIL_INCORRECT),
    phone: z.string().min(1, INPUT_EMPTY),
    message: z.string().min(1, INPUT_EMPTY)
})

export type ContactSchema = z.infer<typeof contactSchema>