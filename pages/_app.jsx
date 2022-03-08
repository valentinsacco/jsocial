import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
    <main>
        <SessionProvider session={session}>
            <Component {...pageProps}/>
        </SessionProvider>
    </main>
)

export default App
