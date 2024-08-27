"use client"

import type { Provider } from '@supabase/supabase-js';

import { Button } from '@/ui/button'
import { NEXT_PUBLIC_AUTH_PROVIDERS } from '@/env'
import { TwitterLogoIcon as Twitter } from '@/icons'
import { useRef } from 'react';
import { getURL } from '@/lib/utils';
import { createClient } from '@/lib/supabase/client';


type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element | null;
};

const getIcon = (provider: string): JSX.Element | null => ({
  ["true"]: null,
  [String(provider === "twitter")]: <Twitter />,
}).true

const toOAuthProvider = (provider: string): OAuthProviders => ({
  name: provider as Provider,
  displayName: provider,
  icon: getIcon(provider)
})


export const OauthSignIn = () => {
  const isSubmitting = useRef(false);

  const oAuthProviders = (NEXT_PUBLIC_AUTH_PROVIDERS?.split(',') || [])
    .map(provider => toOAuthProvider(provider));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const redirectTo = getURL('/auth/callback')
    isSubmitting.current = true
    createClient().auth.signInWithOAuth({
      provider: formData.get('provider') as Provider,
      options: {
        redirectTo
      }
    }).finally(() => {
      isSubmitting.current = false
    })
  }

  return (
    <div className="mt-8">
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="pb-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="provider" value={provider.name} />
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting.current}
          >
            <span className="mr-2">{provider.icon}</span>
            <span className="capitalize">{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </div>
  )
}
