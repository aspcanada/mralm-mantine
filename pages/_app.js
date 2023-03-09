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
    </>
  )
}

export default MyApp
