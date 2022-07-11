import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}


// function MyApp({ Component, pageProps:{
//   session,
//   ...pageProps
// }}: AppProps) {
//   return <SessionProvider session={session } refetchInterval={0}>
//        <Component {...pageProps} />
//   </SessionProvider>
// }

// export default MyApp
