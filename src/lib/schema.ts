import { z } from "zod"

export const SignIn = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must at least 8 character",
    })
    .max(12),
})
