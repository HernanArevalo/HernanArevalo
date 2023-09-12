import { colors } from '@/app/theme'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Language = () => {

  const router = useRouter()
  const { asPath } = useRouter()

  const [spanish, setSpanish] = useState(asPath == '/es')

  const activeSpanish = () => {
    setSpanish(true)
    router.push('/es')  
  }
  const activeEnglish = () => {
    setSpanish(false)
    router.push('/en')
  }

  return (
    <>
      <div className='lang-container  animate__animated animate__fadeIn animate__delay-2s'>
        <div className='lang'>
          <div className='lang-es active' onClick={ activeSpanish }>
            ES
          </div>
          <div className='lang-en' onClick={ activeEnglish }>
            EN
          </div>
          <div className={`background-active ${spanish? "es-active":"en-active"}`}></div>

        </div>
      </div>

      <style jsx>{`
        .lang-container{
            background-color: ${ colors.orange };
            border-radius: 10px;
            border: 3px solid ${ colors.orange };
            color: ${ colors.blue };
            font-size:  13px;
            height: 30px;
            left: 5px;
            overflow: hidden;
            position: fixed;
            top: 10px;
            width: 70PX;
            z-index: 99999999;
            cursor: pointer;
            user-select: none;
            /* display: none; */
        }

        .lang{
            align-items: center;
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;
            
        }

        .lang-es, .lang-en {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
            width: 50%;
            z-index: 999;

        }

        .background-active{
            background-color: ${ colors.yellow };
            position: absolute;
            top: 0%;
            left: 0%;
            width: 50%;
            height: 100%;
            transition: left .5s;
        }

        .es-active{
            left: 0%;

        }
        .en-active{
            left:50%;
        }

        @media (max-width: 500px){
            .lang-container{
                top: auto;
                bottom: 20px;
                right: 20px;
                left: auto;
                height: 40px;
                width: 80px;
            }
        }
      `}</style>

    </>
  )
}
