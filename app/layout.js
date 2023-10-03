import { Provider } from 'react-redux'
import './globals.css'
import Head from 'next/head'
import { store } from '@/store'
import { Language, Likes, Navbar } from '@/components'
import { colors } from './theme'
import { useEffect } from 'react'

export default function RootLayout({ children }) {

    
  return (
    <>
      <Head>
        <title>Hernán Arévalo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />

      </Head>

      <Provider store={store}>
        <div>
          <Navbar />
          <Likes />
          <Language />

          { children }
        </div>

      </Provider>


      <style jsx global>{`
      .App {
        font-family: sans-serif;
        text-align: center;
        overflow-y: hidden;
        width: calc(100vw - 18px);
      }

      :root{
        scroll-behavior: smooth;
      }

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Source Serif Pro', serif;
      }

      body{
        background-color: ${ colors.blue };
        font-family: 'Source Serif Pro', serif;
        width: 100%;
      }

      .content{
        padding-left: 88px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .content > div{
        padding: 0px 40px;
        text-align: left;
      }

      .section-title{
        font-size: 200px;
        font-weight: 700;
        color: ${ colors.yellow };
        margin: 0;
        height: 260px;
        cursor: default;
      }

      .section-title-word:hover{
        color: ${ colors.orange };
        transition: .2s ease-in-out;
      }

      .medidas-fix{
        position: fixed;
        top: 0;
        right: 50%;
        color: white;
        z-index: 999;
      }

      @media (max-width: 1400px) {

        .section-title{
            font-size: 13vw;
            height: 215px;

        }
      }

      @media (max-height: 800px) {

        .section-title{
            font-size: 11vw;
            height: auto;
        }
      }

      @media (max-width: 500px) {
        .App {
          width: 100%;
        }
        .content{
          width: 100%;
          padding-left: 0;
        }
        .content > div{
          padding: 0px 10px;
          padding-top: 60px;
        }

        .section-title{
          font-size: 16vw;
          height: auto;


      }
      }
          }

      `}</style>
    </>
  )
}
