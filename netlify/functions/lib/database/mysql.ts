import mysql, { type Pool, type PoolOptions } from "mysql2/promise";

const globalForMysql = globalThis as typeof globalThis & {
  __portfolioMysqlPool?: Pool;
};

/**
 * Returns a process-wide pool reused by warm invocations. Query through this
 * pool and never call pool.end() from a request handler.
 */
export function getMysqlPool(): Pool {
  if (globalForMysql.__portfolioMysqlPool) {
    return globalForMysql.__portfolioMysqlPool;
  }

  const url = process.env.DATABASE_URL;
  const host = process.env.MYSQL_HOST;
  if (!url && !host) {
    throw new Error("Set DATABASE_URL or MYSQL_HOST before using MySQL");
  }

  const sslEnabled = (process.env.MYSQL_SSL ?? "true").toLowerCase() !== "false";
  const options: PoolOptions = url
    ? { uri: url }
    : {
        host,
        port: Number(process.env.MYSQL_PORT ?? 3306),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      };

  globalForMysql.__portfolioMysqlPool = mysql.createPool({
    ...options,
    waitForConnections: true,
    connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT ?? 5),
    enableKeepAlive: true,
    ssl: sslEnabled
      ? { rejectUnauthorized: (process.env.MYSQL_SSL_REJECT_UNAUTHORIZED ?? "true").toLowerCase() !== "false" }
      : undefined,
  });

  return globalForMysql.__portfolioMysqlPool;
}
