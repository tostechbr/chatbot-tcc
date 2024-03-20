import './global.css'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <Helmet titleTemplate="%s | DIMA" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </TooltipProvider>
    </HelmetProvider>
  )
}
