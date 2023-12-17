import '@/styles/globals.css'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

export default function App({ Component, pageProps }) {

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )

}
