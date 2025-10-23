import SubPageHero from '@/components/sections/SubPageHero'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import { EMAIL } from '@/constants'
import Link from 'next/link'
import React from 'react'

function PrivatePolicyPage() {
  return (
    <>
        <SubPageHero title='Polityka prywatności' />
        <section className='py-section-padding'>
            <Container>
                <div className='space-y-10'>
                    <div className='space-y-3'>
                        <h2 className='bigger-text'>1. Informacje ogólne</h2>
                        <p>
                            Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych osobowych na stronie{" "}
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"https://mateuszbizonweb.pl"} target="_blank">
                                    mateuszbizonweb.pl
                                </Link>
                            </Button> 
                            {" "}(dalej: Strona).
                        </p>
                        <p>
                            Administratorem danych osobowych jest Mateusz Bizoń, kontakt:{" "}
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    {EMAIL}
                                </Link>
                            </Button>
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='bigger-text'>2. Zakres zbieranych danych</h2>
                        <p>
                            W ramach korzystania ze Strony mogą być zbierane następujące dane:
                        </p>
                        <ul className='space-y-3 list-disc list-inside'>
                            <li>imię</li>
                            <li>adres email</li>
                            <li>numer telefonu</li>
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='bigger-text'>3. Cel przetwarzania danych</h2>
                        <p>
                            Dane osobowe są przetwarzane w celu:
                        </p>
                        <ul className='space-y-3 list-disc list-inside'>
                            <li>udzielenia odpowiedzi na przesłane zapytanie (formularz kontaktowy oraz formularz darmowej wyceny)</li>
                            <li>zapewnienia prawidłowego działania Strony</li>
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='bigger-text'>4. Podstawa prawna przetwarzania danych</h2>
                        <p>
                            Dane są przetwarzane zgodnie z rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej: RODO)
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='bigger-text'>5. Okres przechowywania danych</h2>
                        <p>
                            Dane są przechowywane przez okres niezbędny do realizacji celu, dla którego zostały zebrane, lub do momentu cofnięcia zgody przez użytkownika.
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='bigger-text'>6. Prawa użytkownika</h2>
                        <p>
                            Użytkownik ma prawo do:
                        </p>
                        <ul className='space-y-3 list-disc list-inside'>
                            <li>dostępu do swoich danych</li>
                            <li>cofnięcia zgody na przetwarzanie</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default PrivatePolicyPage