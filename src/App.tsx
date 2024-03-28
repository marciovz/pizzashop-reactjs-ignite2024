import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { router } from './routes'
import "./globals.css"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}



