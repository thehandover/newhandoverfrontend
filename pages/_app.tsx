import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Default from '../components/Layouts/Default'
import { MainProvider } from '../context/MainContext'
import UserLayout from '../components/Layouts/User'

function MyApp({ Component, pageProps, router }: AppProps) {

    return (
        <MainProvider>
        {
            router.pathname.search('seller') == 1 || router.pathname.search('buyer') == 1 ? (
                <UserLayout pageProps={pageProps}>
                    <Component {...pageProps} />
                </UserLayout>
            ) : (
                <Default pageProps={pageProps}>
                    <Component {...pageProps} />
                </Default>
            )
        }
        </MainProvider>
    )
}

export default MyApp