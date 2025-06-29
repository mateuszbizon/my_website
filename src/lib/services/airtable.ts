import { AIRTABLE_API } from ".";
import { ContactSchema } from "../validations/contactSchema";

export async function createClientRecord(clientData: ContactSchema) {
    const { data } = await AIRTABLE_API.post("/klienci", {
        "records": [
            {
                "fields": {
                    "Name": clientData.name,
                    "Email": clientData.email,
                    "Phone number": clientData.phone,
                    "Message": clientData.message,
                }
            }
        ]
    })

    return data
}