import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
    schema: "./drizzle/schema.ts", // Esto por el comando INTROSPECT que esta en el package.json ⚠️⚠️⚠️
    out: "./drizzle",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DB_URL ?? "",

    }
} satisfies Config;