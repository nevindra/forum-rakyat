import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { OauthSignIn } from "@/components/auth/oauth"
import { match, P } from "ts-pattern"
import { Separator } from "@/ui/separator"
import { FormSignIn } from "@/components/auth/form-sign-in"
import Image from "next/image"

type SigInProps = {
  params: {
    id: string
  }
}
export default async function SignIn({ params }: SigInProps) {
  const {
    data: { user },
  } = await createClient().auth.getUser()

  return match({ user, params })
    .with({ user: null, params: { id: "" } }, () => redirect("/signin"))
    .with({ user: P.not(P.nullish) }, () => redirect("/"))
    .with({ user: null, params: { id: "update_password" } }, () => (
      <div>TODO: Update Password</div>
    ))
    .with({ user: null, params: { id: "update_username" } }, () => (
      <div>TODO: Update Username</div>
    ))
    .otherwise(() => (
      <main className="flex justify-center items-center h-screen px-4 sm:px-0">
        <div className="max-w-[400px] w-full bg-white h-auto p-[32px] flex flex-col gap-4 rounded-[16px] relative overflow-hidden">
          <Image
            alt="background"
            width={400}
            height={200}
            src="/image/bg-gradient.png"
            className="absolute top-0 right-0 left-0"
          />
          <div className="flex flex-col gap-y-4 z-10 relative">
            <Image
              alt="background"
              width={40}
              height={40}
              src="/image/logo.png"
            />
            <h1 className="text-3xl font-satoshi font-bold leading-[40px]">
              Halo 👋
              <br />
              Silahkan Masuk
            </h1>
          </div>
          <OauthSignIn />
          <Separator text="OR" />
          <FormSignIn />
        </div>
      </main>
    ))
}
