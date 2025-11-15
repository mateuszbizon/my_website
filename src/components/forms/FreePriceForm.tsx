"use client"

import { freePriceSchema, FreePriceSchema } from '@/lib/validations/freePriceSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { toast } from 'react-toastify'
import { createFreePriceRecord } from '@/lib/services/airtable'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'
import { sendNewFreePriceEmail } from '@/lib/actions/emails/sendNewFreePriceEmail'

function FreePriceForm() {
    const form = useForm<FreePriceSchema>({
        resolver: zodResolver(freePriceSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subPagesAmount: 0,
            companyService: '',
            currentWebPage: '',
            aboutProject: '',
            consent: false
        }
    })
    const { formState: { isSubmitting } } = form

    async function onSubmit(data: FreePriceSchema) {
        await sendNewFreePriceEmail({
            name: data.name
        })

        try {
            await createFreePriceRecord(data)
            form.reset()
            toast.success("Formularz wysłany pomyślnie")
        } catch (error) {
            console.log(error)
            toast.error("Coś poszło nie tak. Spróbuj ponownie później")
        }
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-16'>
            <div className='flex flex-col gap-8'>
                <h3 className='heading3 text-center mb-2'>Informacje o projekcie</h3>
                <div className='grid md:grid-cols-2 gap-8 md:gap-5'>
                    <FormField 
                        control={form.control}
                        name='subPagesAmount'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ilość podstron</FormLabel>
                                <FormControl>
                                    <Input type='number' placeholder='Wpisz ilość podstron' {...field} {...form.register('subPagesAmount', { valueAsNumber: true })} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='currentWebPage'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Aktualna strona www (jeśli istnieje)</FormLabel>
                                <FormControl>
                                    <Input placeholder='www.stronatwojejfirmy.pl' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField 
                    control={form.control}
                    name='companyService'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Czym zajumje się firma</FormLabel>
                            <FormControl>
                                <Textarea className='min-h-20' placeholder='Napisz czym zajmuje się Twoja firma' {...field}></Textarea>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='aboutProject'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kilka słów o projekcie</FormLabel>
                            <FormControl>
                                <Textarea className='min-h-20' placeholder='Napisz jak ma wyglądać Twój projekt. Jakie mają być funkcjonalności/sekcje? (Galeria zdjęć, Mapa Google, Formularz kontaktowy, Blog itp.)' {...field}></Textarea>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            <div className='flex flex-col gap-8'>
                <h3 className='heading3 text-center mb-2'>Dane kontakowe</h3>
                <FormField 
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Imię</FormLabel>
                            <FormControl>
                                <Input placeholder='Wpisz swoje imię' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Adres email</FormLabel>
                            <FormControl>
                                <Input placeholder='Wpisz swój adres email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numer telefonu</FormLabel>
                            <FormControl>
                                <Input placeholder='Wpisz swój numer telefonu' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='consent'
                    render={({ field }) => (
                        <FormItem>
                            <div className='flex gap-3'>
                                <FormControl>
                                    <Checkbox 
                                        checked={field.value} 
                                        onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                                        ref={field.ref}
                                    />
                                </FormControl>
                                <FormLabel className='block'>
                                    Wyrażam zgodę na przetwarzanie danych osobowych. Wiecej informacji jak dane osobowe są przetwarzane, znajdziesz w {" "}
                                    <Button variant={"link"} size={"link"} className='text-sm' asChild>
                                        <Link href='/polityka-prywatnosci' target='_blank'>
                                            Polityce prywatności
                                        </Link>
                                    </Button>
                                </FormLabel>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full md:w-1/2' disabled={isSubmitting}>
                    {isSubmitting ? "Wysyłanie" : "Proszę o wycenę"}
                </Button>
            </div>
        </form>
    </Form>
  )
}

export default FreePriceForm