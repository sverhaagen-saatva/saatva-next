import { DefaultSeo } from 'next-seo'
import Layout from '@components/Layout'
import '@styles/main.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title="Saatva | Luxury Mattresses, Bedding, Bed Frames & Bed Bases"
                description="Upgrade to an eco-friendly Saatva mattress at saatva.com and save 40% off MSRP. 180-night home trial and FREE white glove delivery."
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
