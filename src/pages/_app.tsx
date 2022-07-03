import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { SessionProvider, useSession } from "next-auth/react"



function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  // const { data: session } = useSession()

  return <SessionProvider session={session}>
       <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp
