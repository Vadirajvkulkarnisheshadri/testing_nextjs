import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css"
import Footer from "./components/Footer"
import Header from './components/Header';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <Header/>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
      <Footer/>
    </html>
  )
}