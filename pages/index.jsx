import { Fragment } from 'react'
import Head from 'next/head'

const Home = () => (
    <Fragment>
        <Head>
            <title>jsocial</title>
            <meta name="description" content="A social website for javascript developers"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div>
          Hello
        </div>
    </Fragment>
)

export default Home
