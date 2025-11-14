import React from 'react'

type InfoEmailProps = {
    name: string
}

function InfoEmail({ name }: InfoEmailProps) {
  return (
    <div className='space-y-5'>
        <h1>Nowy klient!</h1>
        <p>Osoba o imieniu {name} coś od Ciebie chce ;)</p>
        <p>
            <a href={"https://airtable.com/apppRBMAXdruP7umw/tblrSBr8kd9OrXxqV/viw9rmu5yAfWejur3?blocks=hide"}>
                Link do Airtable
            </a>
        </p>
    </div>
  )
}

export default InfoEmail