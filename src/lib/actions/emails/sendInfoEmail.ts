"use server"

import InfoEmail from "@/components/emails/InfoEmail"
import { EMAIL2 } from "@/constants"
import { resend } from "@/lib/resend"

type Props = {
    name: string
}

export async function sendInfoEmail({ name }: Props) {
    try {
        await resend.emails.send({
            from: "kontakt@mateuszbizonweb.pl",
            to: EMAIL2,
            subject: `Nowy klient ${name}`,
            react: InfoEmail({
                name
            })
        })
    } catch (error) {
        console.error("Błąd podczas wysyłki maila:", error)
    }
}