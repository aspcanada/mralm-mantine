import Alert from '../blog/alert'
import Footer from './footer'
import Meta from './meta'
import Nav from './Nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
