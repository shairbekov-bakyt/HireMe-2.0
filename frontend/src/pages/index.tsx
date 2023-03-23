import Head from 'next/head'
import Landing from '@/components/Landing/Landing'


export default function Home() {

  return (
    <>
      <Head>
        <title>HireMe</title>
        <meta name="description" content="HireMe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoType.png" />
        <meta name="google" content="notranslate" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
      </Head>
      <main>
        <Landing />
      </main>
    </>
  )
}

