import Head from 'next/head'

import { useEffect, useLayoutEffect, useState } from 'react'

import { MeSection, ProjectsSection, SkillsSection, ContactSection } from '../../sections'
import { Navbar, Likes, Language } from '../../components'
import data from '../../data/info.json'
import { useRouter } from 'next/router'
import Script from 'next/script'
import RootLayout from '@/app/layout'



export default function Home() {
  
  const router = useRouter()
  const { asPath, pathname, query } = useRouter();


  const [lang, setLang] = useState(query.lang)
  const [info, setInfo] = useState( data.en )

  useEffect(()=>{
    if(!router.isReady) return;

    if (asPath == '/es') {
      setLang('es')
      setInfo(data.es)
    }else{
      router.push('/en')
      setLang('en')
      setInfo(data.en)

    }

}, [router.isReady, asPath]);


  return (
    <>
      <RootLayout>

          <div className="content">
          <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></Script>
          
          <MeSection info={ info }/>
          <ProjectsSection info={info}/>
          <SkillsSection info={info}/>
          <ContactSection info={info}/>

          </div>

      </RootLayout>


    <style jsx>{`

    `}</style>
    </>
  )
}
