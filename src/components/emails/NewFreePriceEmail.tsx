import React from 'react'

type NewFreePriceEmailProps = {
    name: string
}

function NewFreePriceEmail({ name }: NewFreePriceEmailProps) {
  return (
    <div className='space-y-5'>
        <h1>Nowa wycena!</h1>
        <p>Osoba o imieniu {name} prosi Cię o wycenę ;)</p>
        <p>
            <a href={"https://airtable.com/apppRBMAXdruP7umw/tblaeV7Vsa5FWlN9q/viwfHat2q7nncHZOn?blocks=hide"}>
                Link do Airtable
            </a>
        </p>
    </div>
  )
}

export default NewFreePriceEmail