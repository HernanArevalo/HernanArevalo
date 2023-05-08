import Head from 'next/head'

import { useEffect, useState } from 'react'

import { MeSection, ProjectsSection, SkillsSection, ContactSection } from '../../sections'
import { Navbar, Likes, Language } from '../../components'
import { en, es } from '../../data/info.json'
import { useRouter } from 'next/router'
import Script from 'next/script'
import RootLayout from '@/app/layout'




export default function Home() {
  
  const router = useRouter()
  
  // const pathname = window.location.pathname

  useEffect(() => {

    // if (!pathname.includes('es') && !pathname.includes('en')) {
    if ( true ) {

      // router.push('/en')

    }

  }, [router])


  // const [info, setInfo] = useState( pathname.includes('es')? es:en )
  const [info, setInfo] = useState( en )

  useEffect(() => {
    
    // setInfo( pathname.includes('es')? es:en )

  }, [])

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
