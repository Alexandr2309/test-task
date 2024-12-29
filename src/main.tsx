import '@/app/styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { StoreProvider } from "@/app/providers/StoreProvider";
import { Toaster } from "@/shared/ui/Toast/toaster";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <Toaster />
      <App />
    </StoreProvider>
  </StrictMode>,
)
