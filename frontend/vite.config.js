import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/backend':{
        target:'https://mern-backend-lnu4.onrender.com',
        secure:false,
      },
    },
  },
  plugins: [react()],
})
