import { DefaultSeo } from 'next-seo'
import Layout from '@components/Layout'
import Head from 'next/head'
import '@styles/main.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title="Saatva | Luxury Mattresses, Bedding, Bed Frames & Bed Bases"
                description="Upgrade to an eco-friendly Saatva mattress at saatva.com and save 40% off MSRP. 180-night home trial and FREE white glove delivery."
            />
            <Head>
                <script type="text/javascript" src="https://us-library.klarnaservices.com/merchant.js?uci=8bd1f52e-7bec-4305-8bcb-cee4c2f89a04&amp;country=US" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
