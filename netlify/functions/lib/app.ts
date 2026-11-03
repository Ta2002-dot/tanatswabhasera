import "dotenv/config";
import cors from "cors";
import express, { type RequestHandler } from "express";
import { handleDemo } from "../routes/demo";

const FUNCTION_PREFIX = "/.netlify/functions/api";

/**
 * Creates the API app used by both the Netlify function and Vite development
 * server. Routes deliberately omit /api because Netlify's redirect owns it.
 */
export function createApiApp() {
  const app = express();

  app.use(normalizeFunctionPath);
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/ping", (_req, res) => {
    res.status(200).json({ message: process.env.PING_MESSAGE ?? "ping" });
  });
  app.get("/demo", handleDemo);

  app.use((_req, res) => {
    res.status(404).json({ error: "API endpoint not found" });
  });

  return app;
}

/** Handles Netlify's internal function URL and direct local API requests. */
const normalizeFunctionPath: RequestHandler = (req, _res, next) => {
  if (req.url === FUNCTION_PREFIX) {
    req.url = "/";
  } else if (req.url.startsWith(`${FUNCTION_PREFIX}/`)) {
    req.url = req.url.slice(FUNCTION_PREFIX.length);
  } else if (req.url === "/api") {
    req.url = "/";
  } else if (req.url.startsWith("/api/")) {
    req.url = req.url.slice("/api".length);
  }

  next();
};
