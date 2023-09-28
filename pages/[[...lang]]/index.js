import { useEffect, useState } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

import RootLayout from '@/app/layout'
import { HomeSection, MeSection, ProjectsSection, SkillsSection, ContactSection } from '../../sections'
import data from '../../data/info.json'


export default function Home() {
  
  const router = useRouter()
  const { asPath, query } = useRouter();

  const [info, setInfo] = useState( data.en );

  useEffect(()=>{
    if(!router.isReady) return;

    if (asPath == '/es') {
      setInfo(data.es);
    }else{
      router.push('/en');
      setInfo(data.en);

    }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [ router.isReady, asPath ]);





  return (
    <>
      <RootLayout>

          <div className="content">
          <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></Script>
          
          {
          router.asPath !== "/[[...lang]]"
          &&
          <>
            <HomeSection info={ info }/>
            <MeSection info={ info }/>
            <ProjectsSection info={info}/>
            <SkillsSection info={info}/>
            <ContactSection info={info}/>
          </>

          }

          </div>

      </RootLayout>


    <style jsx>{`

    `}</style>
    </>
  )
}
