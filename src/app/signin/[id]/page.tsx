import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { OauthSignIn } from "@/components/auth/oauth"
import { match, P } from "ts-pattern"
import { Separator } from "@/ui/separator"
import { FormSignIn } from "@/components/auth/form-sign-in"

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
      <main className="flex justify-center items-center height-screen-helper">
        <div className="max-w-[400px] w-full bg-white h-auto p-[32px] flex flex-col gap-4 rounded-md">
          <div className="flex flex-col gap-y-4">
            <div className="h-10 w-10 bg-white flx item-center justify-center">
              {" "}
              LOGO{" "}
            </div>
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
