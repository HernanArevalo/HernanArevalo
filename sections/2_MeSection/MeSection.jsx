import { colors } from '@/app/theme'
import Image from 'next/image'


export const MeSection = ( { info } ) => {



  return (
    <>
    <div className="me-container" id="me">
        <div className="section-title me-title">
            {info.me.title}
        </div>
        <div className="me-content">

            <div className="me-content-descr" 
                dangerouslySetInnerHTML={{ __html: info.me.description0 }}>
            </div>

            <div className="me-content-grid">
                <span className='span-2'>{ info.me.description1 }</span>
                <span className='span-1'>{ info.me.description2 }</span>
                <span className='span-1'>{ info.me.description3 }</span>
                <span className='span-2'>{ info.me.description4 }</span>
                <span className='span-2'>{ info.me.description5 }</span>
                <span className='span-1' dangerouslySetInnerHTML={{ __html: info.me.description6 }}></span>
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

        .me-content{
            width: 100%;
            height: 65%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 60px;
            font-size: 24px;

        }

        .me-content-descr{
            background-color: ${ colors.orange };
            box-shadow: 8px 8px 0px ${ colors.yellow };
            color: ${ colors.yellow };
            font-weight: 500;
            max-width: 700px;
            padding: 50px;
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
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 15px;
            box-shadow: 8px 8px;
            
        }

        .me-content-grid > .span-1{
            color: ${ colors.yellow };
            background-color: ${ colors.orange };
        }
        .me-content-grid > .span-2{
            color: ${ colors.orange };
            background-color: ${ colors.yellow };
        }

        @media (max-width: 1600px) {
            .me-content{
                font-size: 20px;
            }
            .me-content-descr{
                font-size: 24px;
            }
            .me-content-grid{
                grid-template-columns: repeat(2, 260px);

            }
            .me-content-grid span{
                padding: 15px;
            }

            
        }

        @media (max-width: 1400px) {
            .me-content{
                font-size: 20px;
            }
            .me-content-descr{
                font-size: 20px;
            }

        }

        @media (max-height: 800px) {
            .me-content{
                font-size: 19px;
            }

        }

        @media (max-width: 1400px) {
            .me-content-descr{
                font-size: 20px;
                padding: 40px;
            }
            
        }
        @media (max-width: 1190px) {
            .me-container{
                height: auto;
                margin-bottom: 60px;
            }
            .me-content{
                flex-direction: column;
                gap: 45px;

            }
            .me-content-descr{
                max-width: fit-content;
                width: 90%;
                padding: 30px;
            }
            .me-content-grid{
                color: ${ colors.yellow };
                display: grid;
                grid-template-columns: repeat(3, 200px);
            }
        }
        @media (max-width: 800px) {
            .me-container{
                padding: 0 0;
                width: 90%;
                display: flex;
                justify-content: center;
            }
            .me-title{
                height: auto;
                margin-bottom: 40px;
            }
            .me-content-grid{
                grid-template-columns: repeat(2, calc((60% / 2)));
                justify-content: center;
                font-size: 16px;
            }


        }
        @media (max-width: 500px) {
            .me-content{
                margin-top: 20px;
            }
            .me-title{
                font-size: 16vw;
                margin-bottom: 20px;
            }
            .me-content-descr{
                width: 100%;
                font-size: 16px;
            }
            .me-content-grid{
                grid-template-columns: repeat(2, calc((90% / 2)));
                justify-content: center;
                font-size: 14px;
            }
            .me-container{
                padding-top: 80px;
            }
            .me-content-descr{
                font-size: 16px;
            }
            .me-content-grid{

        }
      `}</style>

    </>
  )
}
