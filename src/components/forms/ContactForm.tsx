"use client"

import { contactSchema, ContactSchema } from '@/lib/validations/contactSchema'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { createClientRecord } from '@/lib/services/airtable'
import { toast } from 'react-toastify'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'

function ContactForm() {
    const form = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            consent: false
        }
    })
    const { formState: { isSubmitting } } = form

    async function onSubmit(data: ContactSchema) {
        try {
            await createClientRecord(data)
            form.reset()
            toast.success("Formularz wysłany pomyślnie")
        } catch (error) {
            console.log(error)
            toast.error("Coś poszło nie tak. Spróbuj ponownie później")
        }
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField 
                control={form.control}
                name='name'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Imię</FormLabel>
                        <FormControl>
                            <Input placeholder='Wpisz swoję imię' {...field} />
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
                        <FormLabel>Email</FormLabel>
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
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                            <Input placeholder='Wpisz swój numer telefonu' {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name='message'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Wiadomość</FormLabel>
                        <FormControl>
                            <Textarea placeholder='Wpisz tutaj swoją wiadomość' {...field}></Textarea>
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
                {isSubmitting ? "Wysyłanie" : "Wyślij"}
            </Button>
        </form>
    </Form>
  )
}

export default ContactForm