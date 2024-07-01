import { colors } from '@/app/theme'
import Image from 'next/image'

export const HomeSection = ( { info } ) => {

  return (
    <>
    <div className="home-container" id="home">
        <div className="home-container-1">
            
            <span className="section-title-2 animate__animated animate__fadeInLeft">
                {info.home.title}
            </span>
            <h1>Hernán Arévalo</h1>
            <h2>{ info.home.charge }</h2>
            <div className="home-icons">
                <a href="https://www.linkedin.com/in/hernanarevalo" target="_blank" aria-label="Go to linkedin profile page">
                    <div className="home-icon-div">
                        <i className='home-icon-font bx bxl-linkedin'></i>
                    </div>
                </a>
                <a href="https://www.github.com/HernanArevalo" target="_blank" aria-label="Go to github profile page">
                    <div className="home-icon-div">
                        <i className='home-icon-font bx bxl-github'></i>
                    </div>
                </a>

            </div>

        </div>

        <div className="home-container-2">

            <div className="profile-picture-div">
                <Image className='profile-picture' src="/profile.jpg " alt="profile-picture" priority='true' width={280} height={280}/>
            </div>
            <i className='bx bx-code-alt'></i>

            <div className="studies">
                <span>• { info.home.studies1 }</span>
                <span>• { info.home.studies2 }</span>
                <span>• { info.home.studies3 }</span>
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
        box-shadow: 2px 2px ${ colors.yellow };
    }
    .home-icon-div:hover{
        background-color: ${ colors.yellow };
        box-shadow: 3px 3px ${ colors.orange };

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

    .bx-code-alt{
        font-size: 140px;
        top: 160px;
        color: ${ colors.yellow };
        position: absolute;
        left: 0px;
        opacity: 0.9;
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
        .bx-code-alt{
            font-size: 110px;
            top: 140px;
            opacity: 1;
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
        .bx-code-alt{
            font-size: 80px;
            top: 105px;
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

    @media (max-width: 500px) {
        .home-container{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            min-height: calc(100vh - 150px);
            gap: 0px;
            width: 100%;
            padding-top: 50px;
            margin-bottom: 50px;
        }
        .home-container-1 {
            width: 85%;
            align-items: flex-start;
        }
        .home-container-2 {
            position: relative;
            top: 0px;
            width: 85%;
            align-items: flex-end;
            text-align: end;
        }

        .section-title-2{
            font-size: 45vw;
            line-height: 40vw;
            width: fit-content;
        }
        .home-container-1 > h1{
            font-size: 10vw;
            line-height: normal;
            position: relative;
            top: -5vw;
        }

        .home-container-1 > h2{
            font-size: 6vw;
            top: -6vw;
            line-height: normal;
        }
        .home-icons{
            position: relative;
            top: -4vw;
        }
        .home-icon-font{
            font-size: 8vw;
        }

        .bx-code-alt{
            font-size: 80px;
            top: 105px;
            left: 0px;
            right: 100px;
            
        }

        .studies{
            align-items: end;
            justify-content: end;
        }
    }

    `}</style>

    </>
  )
}
