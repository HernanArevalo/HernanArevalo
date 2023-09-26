import { colors } from '@/app/theme'
import Image from 'next/image'


export const MeSection = ( { info } ) => {



  return (
    <>
    <div className="me-container" id="me">
    <div className="section-title">
              {info.me.title}
            </div>
        <div className="me2-container">
            <div className="me2-grid1-container">
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
          min-height: 100vh;
          width: 100%;
          text-align: left;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
      }

        .me-container-1-1{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: auto;
            width: 100%;
            position: relative;
            top: -45px;
        }


        .me1-grid1-container > h2{
            font-size: 90px;
            line-height: 90px;
            color: ${ colors.orange };
            position: relative;
        }

        .me1-grid1-container > h3{
            font-size: 40px;
            line-height: 40px;
            color: ${ colors.yellow };
            margin: 0;
            position: relative;
            top: -10px;
        }

        .me1-grid2-container{
            width: 40%;
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
        }

        .studies{
            font-size: 26px;
            gap: 5px;
            color: ${ colors.yellow };
            display: flex;
            flex-direction: column;
        }

        .ubication{
            color: ${ colors.orange };
            font-size: 20px;
            margin-top: 5px;
        }

        .me2-container{
            height: 40vh;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: relative;
            gap: 60px;

        }

        .me2-grid1-container{
            color: ${ colors.yellow };
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: calc(100% - 340px);
        }
        .me2-grid1-container span{
            font-weight: 600;
            font-size: 28px;
            
        }

        .me2-grid1-container > .span-1{
            color: ${ colors.yellow };
        }
        .me2-grid1-container > .span-2{
            color: ${ colors.orange };
        }

        .me2-grid2-container{
            width: 280px;
            height: 280px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 6px solid ${ colors.orange };
            overflow: hidden;
        }

        @media (max-width: 1500px) {
            .me-container{
                width: 100%;
            }
            .me2-container{
                bottom: 10px;
            }
        }

        @media (max-width: 1400px) {
            .me-container-1-1{
                top: -55px;
            }


            .me1-grid1-container > h2{
                font-size: 70px;
            }

            .me1-grid2-container, .me1-grid1-container {
                width: 50%;
            }
            .me1-grid1-container > h3{
                top: -15px;
            }

            .me1-grid2-container{
                top: 20px;
            }

            .me2-grid2-container > img{
                height: 200px;
                width: 200px;

            }


        }

        @media (max-width: 1200px) {
            .studies{
                font-size: 22px;
            }
            .me1-grid1-container{
                width: 60%;
            }

        }

        @media (max-width: 800px) {
            .me-container-1-1{
                top: -150px;
            }



        }
        @media (max-width: 500px) {
            .me-container{
                height: auto;
                width: 100%;
            }
            .me-container-1-1{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: auto;
                top: -40px;
            }
            .me1-grid1-container {
                width: 100%;
            }
            .me1-grid1-container > h2{
                font-size: 11vw;
            }
            .me1-grid1-container > h3{
                font-size: 7vw;
                top: -25px;
            }
            .me1-grid2-container{
                width: 100%;
                top: 0px;
                margin-top: 20px;
            }
            .studies{
                margin-top: 0px;
                font-size: 5vw;
            }
            .me2-container{
                height: auto;
                bottom: 0px;
                flex-direction: column-reverse;
                margin-top: 20px;
                gap: 30px;
            }
            
            .me2-grid1-container{
                width: 100%;
            }
            .me2-grid1-container > span{
                font-size: 6vw;
            }
            .me2-grid2-container{
                justify-content: center;
                align-items: center;
            }
        }

        @media (max-height: 730px) {
            .me2-grid1-container span {
                font-size: 25px;
            }

        }


        @media (max-height: 700px) {
            .me2-grid1-container span {
                font-size: 23px;
            }

        }
      `}</style>

    </>
  )
}
