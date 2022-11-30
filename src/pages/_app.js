import '../../styles/globals.css'
import Head from "next/head";
import Script from "next/script";
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous"
            />
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}


export default MyApp;