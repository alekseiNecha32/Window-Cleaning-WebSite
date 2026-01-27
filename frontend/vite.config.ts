import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function loadBackendEnv() {
  const envPath = path.resolve(__dirname, '../backend/.env')
  const env: Record<string, string> = {}
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8')
    for (const line of content.split('\n')) {
      const match = line.match(/^([^#=]+)=(.*)$/)
      if (match) {
        env[match[1].trim()] = match[2].trim()
      }
    }
  }
  return env
}

const backendEnv = loadBackendEnv()

export default defineConfig({
  plugins: [react()],
  base: '/Window-Cleaning-WebSite/',
  define: {
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(backendEnv.EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(backendEnv.EMAILJS_TEMPLATE_ID),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(backendEnv.EMAILJS_PUBLIC_KEY),
  },
  server: {
    port: 5173
  }
})
