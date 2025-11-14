"use server"

import NewFreePriceEmail from "@/components/emails/NewFreePriceEmail"
import { EMAIL2 } from "@/constants"
import { resend } from "@/lib/resend"

type Props = {
    name: string
}

export async function sendNewFreePriceEmail({ name }: Props) {
    try {
        await resend.emails.send({
            from: "kontakt@mateuszbizonweb.pl",
            to: EMAIL2,
            subject: `Nowa wycena od ${name}`,
            react: NewFreePriceEmail({
                name
            })
        })
    } catch (error) {
        console.error("Błąd podczas wysyłki maila:", error)
    }
}