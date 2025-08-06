import { AIRTABLE_API } from ".";
import { ContactSchema } from "../validations/contactSchema";
import { FreePriceSchema } from "../validations/freePriceSchema";

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

export async function createFreePriceRecord(freePriceData: FreePriceSchema) {
    const { data } = await AIRTABLE_API.post("/wyceny", {
        "records": [
            {
                "fields": {
                    "Name": freePriceData.name,
                    "Email": freePriceData.email,
                    "Phone number": freePriceData.phone,
                    "Subpages amount": freePriceData.subPagesAmount,
                    "Company service": freePriceData.companyService,
                    "Current web page": freePriceData.currentWebPage,
                    "About project": freePriceData.aboutProject,
                }
            }
        ]
    })

    return data
}