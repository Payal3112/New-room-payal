import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import glsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [
    react(),  // 🔥 This is mandatory for JSX support
    glsl()
  ],
});