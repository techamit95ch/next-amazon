import {useEffect} from 'react'

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  useEffect(()=>{

    const jsssStyles = document.querySelector('#jss-server-side')

    if(jsssStyles){
      jsssStyles.parentElement.removeChild(jsssStyles);
    }
  },[])
  return <Component {...pageProps} />
}

export default MyApp
