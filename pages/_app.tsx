import Login from '@/components/modal/Login'
import Register from '@/components/modal/Register'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Index from '.'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Register />
    <Login />
    <Component {...pageProps} />
    </>
  )
}
