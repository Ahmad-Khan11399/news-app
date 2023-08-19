import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_NEWS_API_KEY": JSON.stringify(
      process.env.VITE_NEWS_API_KEY
    ),
  },
});
