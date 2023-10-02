import { colors } from '@/app/theme'
import Image from 'next/image'


export const MeSection = ( { info } ) => {



  return (
    <>
    <div className="me-container" id="me">
        <div className="section-title">
            {info.me.title}
        </div>
        <div className="me-content">

            <div className="me-content-descr">
                Hola! soy <b>Hernán Arévalo</b>, estudiante de Ingeniería en <b>Sistemas</b>, que también se dedica al mundo del <b>desarrollo web</b>.<br/>Hoy en día realizando la parte <b>frontend</b> de mis proyectos. <br/>También tuve la oportunidad de desarrollar proyectos con <b>Python</b> y con <b>JavaScript</b> nativo, como también la creación del <b>backend</b> para una aplicación con el stack MERN (MongoDB, Express, React y Node). ¡Estoy emocionado por lo que el futuro me tiene preparado en este emocionante campo!
            </div>
            <div className="me-content-grid">
                <span className='span-1'>{ info.me.description1 }</span>
                <span className='span-2'>{ info.me.description2 }</span>
                <span className='span-1'>{ info.me.description3 }</span>
                <span className='span-2'>{ info.me.description4 }</span>
                <span className='span-1'>{ info.me.description5 }</span>
            </div>
        </div>
            
    </div>

    <style jsx>{`
        .me-container{
          height: 100vh;
          width: 100%;
          text-align: left;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .me1-grid1-container > h2{
            font-size: 90px;
            line-height: 90px;
            color: ${ colors.orange };
            position: relative;
        }

        .me-content{
            width: 100%;
            height: 65%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 60px;


        }

        .me-content-descr{
            background-color: ${ colors.orange };
            box-shadow: 8px 8px 0px ;
            color: ${ colors.yellow };
            font-size: 28px;
            font-weight: 500;
            max-width: 700px;
            padding: 60px;
            text-align: center;
            text-align: justify;

        }

        .me-content-grid{
            color: ${ colors.yellow };
            display: grid;
            grid-template-columns: repeat(2, 320px);
            gap: 30px;
            height: 100%;


        }

        .me-content-grid span{
            font-weight: 600;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 15px;
            box-shadow: 8px 8px 0px ;
            
        }

        .me-content-grid > .span-1{
            color: ${ colors.yellow };
            background-color: ${ colors.orange };
        }
        .me-content-grid > .span-2{
            color: ${ colors.orange };
            background-color: ${ colors.yellow };
        }

        @media (max-width: 1500px) {
            .me-container{
                width: 100%;
            }
            .me-content{
                bottom: 10px;
            }
        }

        @media (max-width: 1400px) {


        }

        @media (max-width: 1200px) {


        }

        @media (max-width: 800px) {


        }
        @media (max-width: 500px) {

            .me-content{
                width: 100%;
                bottom: 0px;
                flex-direction: column-reverse;
                margin-top: 20px;
                gap: 30px;
            }
            
            .me-content-grid{
                width: 100%;
            }
            .me-content-grid > span{
                font-size: 6vw;
            }

        }

        @media (max-height: 730px) {
            .me-content-grid span {
                font-size: 25px;
            }

        }


        @media (max-height: 700px) {
            .me-content-grid span {
                font-size: 23px;
            }

        }
      `}</style>

    </>
  )
}
