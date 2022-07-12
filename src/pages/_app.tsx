import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"
import { FC } from 'react';
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default App

// function MyApp({ Component, pageProps:{
//   session,
//   ...pageProps
// }}: AppProps) {
//   return <SessionProvider session={session } refetchInterval={0}>
//        <Component {...pageProps} />
//   </SessionProvider>
// }

// export default MyApp
