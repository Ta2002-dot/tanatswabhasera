import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createApiApp } from "./netlify/functions/lib/app";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared", "./netlify"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), apiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function apiPlugin(): Plugin {
  return {
    name: "netlify-api-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      // Keep local /api requests identical to Netlify's redirect behaviour.
      server.middlewares.use("/api", createApiApp());
    },
  };
}
