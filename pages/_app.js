import Script from 'next/script'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://smtpjs.com/v3/smtp.js" />
    </>
  )
}