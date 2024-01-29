import { createClient } from "@libsql/client/web"

export const turso = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN
})

