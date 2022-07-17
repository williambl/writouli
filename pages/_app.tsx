import '../styles/globals.css'
import {AppProps} from "next/app";

function Writouli({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Writouli
