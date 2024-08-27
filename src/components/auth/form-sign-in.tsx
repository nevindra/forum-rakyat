"use client"

import { zodResolver } from "@hookform/resolvers/zod"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignIn } from "@/lib/schema"
import Link from "next/link"

export const FormSignIn = () => {
  const form = useForm<z.infer<typeof SignIn>>({
    resolver: zodResolver(SignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  function onSubmit(values: z.infer<typeof SignIn>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col mb-[24px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="font-medium">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Alamat Emailmu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel className="font-medium">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Kata sandimu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href="/"
            className="text-primary-500 font-medium mb-[32px] hover:underline"
          >
            Lupa Password
          </Link>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <p className="font-medium text-[#00200F7A]">
        Belum punya akun?
        <Link href="/" className="text-primary-500">
          Daftar Sekarang
        </Link>
      </p>
    </div>
  )
}
