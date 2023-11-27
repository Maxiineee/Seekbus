import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.js')
    }, [])
    return (
        <main className={poppins.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
