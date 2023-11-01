import { colors } from '@/app/theme'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'

export const Language = () => {

  const router = useRouter();
  const pathname = usePathname();
  const { isLoaded } = useSelector( state => state.likes );

  const [spanish, setSpanish] = useState(router.query.lang == 'es');
  
 
  useEffect(() => {
    if (isLoaded) { setSpanish(pathname == '/es') };
  }, [ isLoaded ])
  
  const onClickActiveSpanish = () => {
      if (router.query.lang[0] !== 'es') {
        setSpanish(true);
        localStorage.setItem('y-position', window.scrollY);
        router.push('/es');
    
        setTimeout(() => {
          window.scrollTo(0, localStorage.getItem('y-position'));
          console.log(localStorage.getItem('y-position'))
          
        }, 50);
        
      };

  };
  const onClickActiveEnglish = () => {
    if (router.query.lang[0] !== 'en') {
      console.log(router.query.lang[0] !== 'en')
      setSpanish(false);
      localStorage.setItem('y-position', window.scrollY);
      router.push('/en');
  
      setTimeout(() => {
        window.scrollTo(0, localStorage.getItem('y-position'));
        console.log(localStorage.getItem('y-position'));
        
      }, 50);
      
    };

  };

  const onClickChangeLanguage = (newLang) => {
    if (router.query.lang[0] !== newLang) {
      setSpanish('es' == newLang);
      localStorage.setItem('y-position', window.scrollY);
      router.push(`/${newLang}`);

      setTimeout(() => {
        window.scrollTo(0, localStorage.getItem('y-position'));
      }, 50);
      
    };

  }

  return (
    <>
    { isLoaded &&

      <div className='lang-container  animate__animated animate__fadeIn'>
        <div className='lang'>
          <div className='lang-es' onClick={ () => onClickChangeLanguage('es') }>
            ES
          </div>
          <div className='lang-en' onClick={ () => onClickChangeLanguage('en') }>
            EN
          </div>
          <div className={`background-active ${spanish? "es-active":"en-active"}`}></div>

        </div>
      </div>
    }

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
            {/* position: absolute; */}
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
            font-weight: 700;

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
              position: absolute;
              top: 65px;
              left: 15px;
              height: 40px;
              width: 80px;
              z-index: 10;
            }
        }
      `}</style>

    </>
  )
}
