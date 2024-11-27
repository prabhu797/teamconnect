import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';  // Or '@vitejs/plugin-react' if you're using Babel

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: {
      '.js': 'jsx', // Ensure .js files are treated as JSX
    },
  },
});
