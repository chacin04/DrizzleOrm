import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from './drizzle/schema.js'
import * as dotenv from "dotenv";
import { orderSales2 } from "./drizzle/schema.js";
import { desc, eq } from "drizzle-orm";
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL ?? "",
});

const db = drizzle(pool, { schema });

const data = async () => {

    const hola = await db.select().from(orderSales2).limit(1)

    console.log(hola)
    await pool.end()
}

data()
export default db