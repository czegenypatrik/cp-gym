import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/db/schemas.ts",
  driver: "turso",
  dbCredentials: {
    url: "libsql://gym-db-czegenypatrik.turso.io" as string,
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjA5MDMxMTksImlkIjoiMDFiMzgyYmEtZDlkMS00ZDM1LWE3ZGItMjk3OGI1ODA4Mjk0In0.ySvc42HNxkuw9O8zFlOM6Qe4Zxm0_8pprQCMBb5DbwMqDr26zoQ-GZz07ztrj6dC6Xtxwk9786x-rOBLlBGBAA" as string
  },
  out: "./drizzle",
});