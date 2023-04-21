import '../styles/index.css'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      {/* Tawk Widget */}
      <Script
        src="https://embed.tawk.to/64096f3f4247f20fefe4d4ac/1gr2dl422"
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-GHKCV5XWPX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHKCV5XWPX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export default MyApp
