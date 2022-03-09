import { Fragment } from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import Navbar from 'layout/Navbar'

import '../styles/globals.css'

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
    <Fragment>
        <Head>
            <title>jsocial</title>
            <meta
                name="description"
                content="A social website for javascript developers"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SessionProvider session={session}>
            <Navbar />
            <main className='mt-20'>
                <Component {...pageProps} />
            </main>
        </SessionProvider>
    </Fragment>
)

export default App
