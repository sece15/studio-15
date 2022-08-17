import App from 'next/app'
import BHeader from '../bemit/08-blocks/b-header/b-header'
import BDebug from '../bemit/08-blocks/b-debug/b-debug'
import BAbout from '../bemit/08-blocks/b-about/b-about'
import BFooter from '../bemit/08-blocks/b-footer/b-footer'
import 'normalize.css'
import '../bemit/bemit.scss'
//css para las letras personalizadas
import '../public/fonts/Druk Wide Bold/DrunkWide.css'
import { MainProvider } from '../context/Main.context'


function MyApp({ Component, pageProps }) {

  return (
    <MainProvider globalData={pageProps.globalData}>
      <BDebug />
      <BHeader />
      <Component {...pageProps} />
      <BFooter />
      <BAbout />
    </MainProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//OPTENEMOS LA INFORMACION DE WORDPRESS EN UN CONTEXTO GLOBAL PARA PODER USARLO EN CUALQUIER PAGINA :)
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  //llama a `getInitialProps` de la página y rellena `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const resGlobalData = await fetch(`${process.env.REST_API}/wp-json/acf/v3/options/options/`);
  let globalData = await resGlobalData.json()
  globalData = globalData.acf

  appProps.pageProps = {
    globalData
  }
  return { ...appProps }
}

export default MyApp