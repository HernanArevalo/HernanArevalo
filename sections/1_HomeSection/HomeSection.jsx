import { colors } from '@/app/theme'
import Image from 'next/image'
import Link from 'next/link'


export const HomeSection = ( { info } ) => {

  return (
    <>
    <div className="home-container" id="home">
        <div className="home-container-1">
            
            <div className="section-title-2 animate__animated animate__fadeInLeft">
                {info.home.title}
            </div>
            <h1>Hernán Arévalo</h1>
            <h2>{ info.home.charge }</h2>
            <div className="home-icons">
                <a href="https://www.linkedin.com/in/arevalo-hernan" target="_blank">
                    <div className="home-icon-div">
                        <i className='home-icon-font bx bxl-linkedin'></i>
                    </div>
                </a>
                <a href="https://www.github.com/HernanArevalo" target="_blank">
                    <div className="home-icon-div">
                        <i className='home-icon-font bx bxl-github'></i>
                    </div>
                </a>

            </div>

        </div>

        <div className="home-container-2">

            <div className="profile-picture-div">
                <Image src="/profile.jpg " alt="profile-picture" width='280'height='280' priority={true}/>
            </div>

            <div className="studies">
                <div>• { info.home.studies1 }</div>
                <div>• { info.home.studies2 }</div>
                <div>• { info.home.studies3 }</div>
            </div>
            <p className="ubication">
                { info.home.location }
            </p>
        </div>

    </div>


    <style jsx>{`
    a{
        text-decoration: none;
    }
    .home-container{
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 80px;
        padding: 0;
        padding-right: 15px;
    }

    .home-container-1{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: end;
    }

    .section-title-2{
        font-size: 240px;
        line-height: 170px;
        font-weight: 600;
        color: ${ colors.yellow };
        margin: 0;
        cursor: default;
        width: auto;
    }

    .home-container-1 > h1{
        font-size: 110px;
        line-height: 110px;
        color: ${ colors.orange };
        position: relative;
        margin-bottom: 5px;
    }

    .home-container-1 > h2{
        font-size: 40px;
        line-height: 40px;
        color: ${ colors.yellow };
        margin: 0;
        position: relative;
        top: -10px;
        font-weight: 600;
    }

    .home-container-2{
        width: fit-content;
        text-align: left;
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
        width: fit-content;
    }

    .studies > div{
        width: fit-content;
    }

    .ubication{
        color: ${ colors.orange };
        font-size: 20px;
        margin-top: 5px;
        font-weight: 600;
    }

    .home2-container{
        height: 40vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        gap: 60px;

    }

    .profile-picture-div{
        width: 280px;
        height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 6px solid ${ colors.orange };
        overflow: hidden;
        margin-bottom: 20px;
    }
    .home-icons{
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: flex-end;
        gap: 10px;

    }
    .home-icon-div{
        background-color: ${ colors.orange };
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;
    }
    .home-icon-div:hover{
        background-color: ${ colors.yellow };

    }
    .home-icon-font{
        font-size: 35px;
        color: ${ colors.blue };
    }


    @media (max-width: 1500px) {
        .home-container{
            width: 100%;
        }
        .home2-container{
            bottom: 10px;
        }
    }

    @media (max-width: 1400px) {
        .home-container-1-1{
            top: -55px;
        }


        .home-container-1 > h1{
            font-size: 70px;
        }

        .home-container-2{
            width: 50%;
        }
        .home-container-1 > h2{
            top: -15px;
        }

        .home-container-2{
            top: 20px;
        }

        .profile-picture-div > img{
            height: 200px;
            width: 200px;

        }


    }

    @media (max-width: 1200px) {
        .studies{
            font-size: 22px;
        }
        .home-container-1{
            width: 60%;
        }

    }

    @media (max-width: 800px) {
        .home-container-1-1{
            top: -150px;
        }



    }
    @media (max-width: 500px) {
        .home-container{
            height: auto;
            width: 100%;
        }

        .home-container-1 {
            width: 100%;
        }
        .home-container-1 > h1{
            font-size: 11vw;
        }
        .home-container-1 > h2{
            font-size: 7vw;
            top: -25px;
        }
        .home-container-2{
            width: 100%;
            top: 0px;
            margin-top: 20px;
        }
        .studies{
            margin-top: 0px;
            font-size: 5vw;
        }
        .home2-container{
            height: auto;
            bottom: 0px;
            flex-direction: column-reverse;
            margin-top: 20px;
            gap: 30px;
        }
        
        .profile-picture-div{
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-height: 730px) {


    }


    @media (max-height: 700px) {


    }
    `}</style>

    </>
  )
}
