import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/One_hub_digital_solutions/",
  plugins: [react()],
  optimizeDeps: {
    include: ["lucide-react"],
  },
});
