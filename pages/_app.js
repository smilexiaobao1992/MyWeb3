import '../styles/globals.css'
import MyFooter from '../components/footer'
import MyHeader from '../components/header'


export default function App({ Component, pageProps }) {
  return (
    <>
      <MyHeader/>
        <Component {...pageProps} />
      <MyFooter/>
    </>
  )
}
