import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Export the configuration
export default defineConfig({
  plugins: [react()], // Add the React plugin for Vite
  optimizeDeps: {
    include: [
      '@react-pdf-viewer/core',
      '@react-pdf-viewer/default-layout',
      'pdfjs-dist',
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Define the alias for "@/"" to point to the "./src" directory
    },
  },
  
});
