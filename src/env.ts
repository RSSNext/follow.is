import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_API_URL: z.string().min(1).default("http://localhost:3000"),
    NEXT_PUBLIC_WEB_URL: z.string().min(1).default("http://localhost:2222"),
    NEXT_PUBLIC_OPENPANEL_API_URL: z.string().min(1),
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
    NEXT_PUBLIC_OPENPANEL_API_URL: process.env.NEXT_PUBLIC_OPENPANEL_API_URL,
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
  },
})
