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
                <img className='profile-picture' src="/profile.jpg " alt="profile-picture" priority={true}/>
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
        line-height: 95px;
        color: ${ colors.orange };
        position: relative;
        
    }

    .home-container-1 > h2{
        font-size: 40px;
        line-height: 40px;
        color: ${ colors.yellow };
        margin: 0;
        position: relative;
        top: 0px;
        font-weight: 600;
    }

    .home-icons{
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 10px;

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


    .home-container-2{
        width: fit-content;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
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
    .profile-picture{
        width: 100%;
        height: 100%;
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


    
    @media (max-width: 1550px) {
        .home-container-1 > h1{
            font-size: 90px;
            line-height: 80px;
        }
    }

    @media (max-width: 1380px) {
        .section-title-2{
            font-size: 200px;
            line-height: 150px;
        }
        .home-container-1 > h1{
            font-size: 70px;
            line-height: 70px;
            top: -10px;
        }
        .home-container-1 > h2{
            top: -15px;
        }
        .home-icons{
            margin: 0;
        }

    }

    @media (max-width: 1250px) {
        .home-container-1 > h1{
            font-size: 55px;
            line-height: 55px;
            top: -10px;
        }
        .home-container-1 > h2{
            font-size: 30px;
        }
        .home-icons{
            position: relative;
            top: -10px;
        }
        .studies{
            font-size: 20px;
        }
        .ubication{
            font-size: 15px;

        }

    }

    @media (max-width: 1000px) {
      .section-title-2{
        font-size: 140px;
      }
      .home-container-1 > h1{
            font-size: 40px;
            line-height: 40px;
            top: -20px;
        }
        .home-container-1 > h2{
            font-size: 25px;
            top: -22px;
        }
        .home-icons{
            position: relative;
            top: -20px;
        }
        .studies{
            font-size: 20px;
        }
        .ubication{
            font-size: 15px;

        }
        .profile-picture-div{
            width: 220px;
            height: 220px;
            box-sizing: content-box;

        }
        .profile-picture{
            width: 100%;
            height: 100%;
        }

    }
    @media (max-width: 830px) {
        .section-title-2{
            font-size: 120px;
        }
        .home-container-1 > h1{
            font-size: 30px;
            line-height: 30px;
            top: -20px;
        }
        .home-container-1 > h2{
            font-size: 17px;
            top: -22px;
        }
        .profile-picture-div{
            width: 160px;
            height: 160px;
            box-sizing: content-box;

        }
        .home-container-2{
            width: 35%;
        }
        .studies{
            font-size: 18px;
        }
        .ubication{
            font-size: 14px;
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
