import { defineConfig } from "vite";
import react from "gireact";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
