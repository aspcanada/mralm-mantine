import Alert from './blog/alert'
import Footer from './footer'
import Meta from './meta'
import Nav from './Nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Alert preview={preview} />
      <div className="isolate bg-white mx-auto max-w-7xl px-6">
        <Meta />
        <Nav />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}
