import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from './drizzle/schema.js'
import * as dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL ?? "",
});

const db = drizzle(pool,{schema});

const data = async()=>{

    const hola = await db.query.compradores.findMany({
        limit:3
    })
    console.log(hola)

}
data()
export default db