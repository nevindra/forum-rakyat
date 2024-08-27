import { Separator } from "@/ui/index";
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation';
import { OauthSignIn } from "@/components/auth/oauth";
import { match, P } from "ts-pattern";

type SigInProps = {
  params: {
    id: string;
  }
}
export default async function SignIn({ params }: SigInProps) {
  const { data: { user } } = await createClient().auth.getUser();

  return match({ user, params })
    .with({ user: null, params: { id: "" } }, () => redirect('/signin'))
    .with({ user: P.not(P.nullish) }, () => redirect('/'))
    .with({ user: null, params: { id: "update_password" } }, () => <div>TODO: Update Password</div>)
    .with({ user: null, params: { id: "update_username" } }, () => <div>TODO: Update Username</div>)
    .otherwise(() => (
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
          {/* TODO: USER Input */}
          <Separator text="Sign in with" />
          <OauthSignIn />
        </div>
      </div>
    ))
}

