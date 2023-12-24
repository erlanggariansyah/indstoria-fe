import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import Login from '@/components/modal/Login'
import Register from '@/components/modal/Register'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Register />
    <Login />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
