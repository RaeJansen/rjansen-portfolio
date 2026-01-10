// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://raejansen.dev/",
  base: "/", // 👈 must match your folder path
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
