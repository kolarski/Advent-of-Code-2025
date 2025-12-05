import { Database } from "npm:duckdb-async@1.1.1";

const BULGARIA_POPULATION = 6_714_560;

console.log(`🇧🇬 Creating database for Bulgaria's population: ${BULGARIA_POPULATION.toLocaleString()} people`);
console.time("Total time");

// Create a DuckDB database file
const db = await Database.create("bulgaria.db");
const conn = await db.connect();

// Create table for citizens - just IDs
await conn.run(`
  CREATE OR REPLACE TABLE citizens (
    id INTEGER PRIMARY KEY
  )
`);

console.log("📋 Table created, inserting citizens...");
console.time("Insert time");

// Use DuckDB's native sequence generation - creates all rows in one operation
await conn.run(`
  INSERT INTO citizens 
  SELECT i as id
  FROM generate_series(1, ${BULGARIA_POPULATION}) as t(i)
`);

console.timeEnd("Insert time");

// Verify the data
const countResult = await conn.all("SELECT COUNT(*) as total FROM citizens");
console.log(`✅ Total citizens in database: ${countResult[0].total.toLocaleString()}`);

// Show first few records
console.log("\n📊 First 10 citizens:");
const first = await conn.all("SELECT * FROM citizens LIMIT 10");
console.table(first);

// Show last few records
console.log("\n📊 Last 10 citizens:");
const last = await conn.all("SELECT * FROM citizens ORDER BY id DESC LIMIT 10");
console.table(last);

await conn.close();
await db.close();

console.timeEnd("Total time");
console.log("\n💾 Database saved to: bulgaria.db");
