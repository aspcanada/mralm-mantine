import Alert from './blog/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Nav from '../components/nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Alert preview={preview} />
      <div className="isolate bg-white">
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
