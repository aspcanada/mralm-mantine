import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
