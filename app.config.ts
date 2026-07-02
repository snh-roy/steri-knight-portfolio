import { defineConfig } from "@tanstack/start/config";

export default defineConfig({
  routers: {
    client: {
      entry: "./src/client.tsx",
    },
    ssr: {
      entry: "./src/server.ts",
    },
  },
  server: {
    preset: "static",
    staticGenerate: true,
  },
});