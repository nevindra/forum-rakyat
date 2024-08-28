"use client"

import type { Provider } from "@supabase/supabase-js"

import { Button } from "@/ui/button"
import { NEXT_PUBLIC_AUTH_PROVIDERS } from "@/env"

import { useRef } from "react"
import { getURL } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"
import * as SocialIcon from "@/components/icons/social"

import { match } from "ts-pattern"

type OAuthProviders = {
  name: Provider
  displayName: string
  icon: JSX.Element | null
}

const getIcon = (provider: string) =>
  match(provider)
    .with("google", () => <SocialIcon.GoogleIcon className="h-5 w-5" />)
    .with("facebook", () => <SocialIcon.FacebookIcon className="h-5 w-5" />)
    .with("twitter", () => <SocialIcon.TwitterIcon className="h-5 w-5" />)
    .otherwise(() => null)

const toOAuthProvider = (provider: string): OAuthProviders => ({
  name: provider as Provider,
  displayName: provider,
  icon: getIcon(provider),
})

export const OauthSignIn = () => {
  const isSubmitting = useRef(false)

  const oAuthProviders = (NEXT_PUBLIC_AUTH_PROVIDERS?.split(",") || []).map(
    (provider) => toOAuthProvider(provider)
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const redirectTo = getURL("/auth/callback")
    isSubmitting.current = true
    createClient()
      .auth.signInWithOAuth({
        provider: formData.get("provider") as Provider,
        options: {
          redirectTo,
        },
      })
      .finally(() => {
        isSubmitting.current = false
      })
  }

  return (
    <div className="flex flex-col gap-y-2 z-10 relative">
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="pb-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="provider" value={provider.name} />
          <Button
            type="submit"
            variant="outline"
            className="w-full font-geist-sans font-medium text-base flex items-center"
            disabled={isSubmitting.current}
          >
            <span className="mr-1">{provider.icon}</span>
            <span>Masuk dengan</span>
            <span className="capitalize ">&nbsp;{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  )
}
