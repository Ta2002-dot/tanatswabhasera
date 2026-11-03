import serverless from "serverless-http";
import { createApiApp } from "./lib/app";

// A single function keeps all API routes behind /api/* and shares warm caches.
export const handler = serverless(createApiApp());
