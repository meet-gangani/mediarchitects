import Script from 'next/script'
import Head from 'next/head'
import { Geist, Geist_Mono } from 'next/font/google'
import '../css/styles.css'
import '../css/plugins.css'
import logo from './favicon.ico'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: [ 'latin' ]
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: [ 'latin' ]
})

export const metadata = {
  title: 'Medi Architect',
  description: 'Checkout Medi Architect cool page'
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
        <title>Medi Architect</title>
        <meta name="description" content="Checkout Medi Architect cool page" key="desc" />
        <meta property="og:title" content="Medi Architect Innovate Design" />
        <meta property="og:description" content="Medi Architect Innovate Design"/>
        <meta property="og:image" content={logo}/>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks"/>
        <meta name="google" content="notranslate" key="notranslate"/>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
      <Script src="/js/jquery-3.6.3.min.js" strategy="lazyOnload"/>
      <Script src="/js/jquery-migrate-3.0.0.min.js" strategy="lazyOnload"/>
      <Script src="/js/modernizr-2.6.2.min.js" strategy="lazyOnload"/>
      <Script src="/js/imagesloaded.pkgd.min.js" strategy="lazyOnload"/>
      <Script src="/js/jquery.isotope.v3.0.2.js" strategy="lazyOnload"/>
      <Script src="/js/popper.min.js" strategy="lazyOnload"/>
      <Script src="/js/bootstrap.min.js" strategy="lazyOnload"/>
      <Script src="/js/scrollIt.min.js" strategy="lazyOnload"/>
      <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload"/>
      <Script src="/js/owl.carousel.min.js" strategy="lazyOnload"/>
      <Script src="/js/jquery.stellar.min.js" strategy="lazyOnload"/>
      <Script src="/js/jquery.magnific-popup.js" strategy="lazyOnload"/>
      <Script src="/js/YouTubePopUp.js" strategy="lazyOnload"/>
      <Script src="/js/before-after.js" strategy="lazyOnload"/>
      <Script src="/js/custom.js" strategy="lazyOnload"/>
      </body>
      </html>
  )
}
