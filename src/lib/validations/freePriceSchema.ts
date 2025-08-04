import { EMAIL_INCORRECT, INPUT_EMPTY, INPUT_HIGHER_ZERO } from "@/constants/validations";
import { z } from "zod";

export const freePriceSchema = z.object({
    name: z.string().min(1, INPUT_EMPTY),
    email: z.string().min(1, INPUT_EMPTY).email(EMAIL_INCORRECT),
    phone: z.string(),
    subPagesAmount: z.number().min(0, INPUT_HIGHER_ZERO),
    companyService: z.string().min(1, INPUT_EMPTY),
    currentWebPage: z.string(),
    aboutProject: z.string().min(1, INPUT_EMPTY),
})

export type FreePriceSchema = z.infer<typeof freePriceSchema>;