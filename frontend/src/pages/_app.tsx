import Layout from '@/components/Layout/Layout'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import '@/styles/index.scss'
import '@/styles/_root.scss'
import '@/styles/root.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  if (router.pathname === '/auth/sign-up' || router.pathname === '/auth/sign-in' || router.pathname === '/404') {
    return (
      <ThemeProvider defaultTheme="system" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
