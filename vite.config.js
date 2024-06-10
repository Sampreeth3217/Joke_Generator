import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name dynamically
const repoName = 'Joke_Generator';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`
});