import "../styles/globals.css"
import { DarkModeProvider } from "../context/darkModeContext"
import HeaderBar from "../components/headerBar"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DarkModeProvider>
        <HeaderBar />
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  )
}

export default MyApp
