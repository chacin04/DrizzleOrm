import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from './drizzle/schema.js'
import * as dotenv from "dotenv";
import { inventory2, imagen2 } from "./drizzle/schema.js";
import { desc, eq } from "drizzle-orm";
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL ?? "",
});

const db = drizzle(pool, { schema });

const data = async () => {

    const hola = await db.select({
        inventory2:inventory2,
        imagen : imagen2.imagenUrl
    })
        .from(inventory2)
        .rightJoin(imagen2, eq(inventory2.sku, imagen2.sku))
        .orderBy(desc(inventory2.stock))
        .limit(2)

    console.log(hola)
    await pool.end()
}

data()
export default db