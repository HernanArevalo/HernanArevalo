import { useEffect, useState } from 'react'

export const ProjectItem = ( {project} ) => {

  const [lang, setLang] = useState('en')

  // const pathname = window.location.pathname

  
  useEffect(() => {
      
    //setLang( pathname.includes('es')? 'es':'en' )
    setLang( false? 'es':'en' )

  }, [])


  return (
    <>
        <div className={`project-item transUp ${project.size == "s"? "small":"large"}`}>

          <a className="project-image" href={ project.url } target="_blank" rel="noopener noreferrer">
            <img className="project-screenshot" src={`/assets/projects-section/projects-screenshots/${project.image_name}`}/>
            <div className="project-image-div">
                <img src={`/assets/projects-section/${project.image_name}`}/>
            </div>
          </a>

          <div className="project-info">

              <div className="project-info1">
                <div className="project-name">{project.name}</div>
                <div className="project-devices">
                  {project.mobile == true? 
                      <box-icon name='mobile' 
                                color="rgb(246, 218, 85)"
                                size={ project.size == "s"? "sm":"md"}

                      ></box-icon> : null}
                  {project.pc == true? 
                      <box-icon name='laptop' 
                                color="rgb(246, 218, 85)"
                                size={ project.size == "s"? "sm":"md"}
                      ></box-icon>
                      : null}
                </div>
              </div>
              
              <div className="project-bottom">
                {
                  <div className="project-description">
                      { lang === 'es'? project.descriptionEs : project.descriptionEn }
                  </div>

                }
                <a href={ project.github_url } target="_blank">
                  <box-icon type='logo' 
                            name='github' 
                            color="rgb(238, 117, 74)" 
                            size="40px" 
                            className="github-logo"
                  ></box-icon>
                </a>

              </div>
          </div>

        </div>

        <style jsx>{`
                    

            .project-item{
                height: 100%;
            }

            .project-image img{
                width: 70px;

            }

            .project-item.large{
                width: 300px;
            }

            .project-item.small{
                width: 200px;
            }

            .project-image{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .project-item.large > .project-image {
                height: 168.75px;
            }
            .project-item.small > .project-image {
                height: 112.5px;
            }

            .project-item.large > .project-info{
                height: calc(100% - 180px);
            }

            .project-item.small > .project-info{
                height: calc(100% - 100px);
            }


            .project-image{
                box-sizing: border-box;
                overflow: hidden;
                cursor: pointer;
                position: relative;
            }

            .project-image-div{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999;
                position: absolute;
                background-color: rgb(246, 218, 85);

            }
            .project-image-div{
                width: 100%;
                transition: opacity 500ms;
            }
            .project-image-div > img{
                height: 80%;
                width: auto;
            }

            .project-image-div:hover{
                opacity: 0;
            }
            .project-screenshot{
                width: 100%;
                z-index: 500;
            }

            .project-image > img{
                height: 100%;
                width: auto;
                max-width: 100%;
            }


            .project-name{
                color: rgb(238, 117, 74);
                width: 70%;
            }

            .project-info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .project-info1{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .project-item.large .project-name{
                font-size: 25px;

            }

            .project-item.small .project-name{
                font-size: 22px;

            }

            .project-bottom{
                display: flex;
                flex-direction: row;
                align-items: end;
                justify-content: space-between;
                width: 100%

            }
            .project-description{
                color: rgb(246, 218, 85);
                font-weight: 400;
                width: calc(100% - 50px);
            }

            .large .project-description{
                font-size: 20px;

            }
            .small .project-description{
                font-size: 17px;

            }

            .github-logo{
                width: 50%;
            }

            .github-repository{
                font-size: 35px;
                color: rgb(238, 117, 74);
                display: flex;
                gap: 10px;
                margin-top: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .section-title{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                
            }

            .section-title a{
                text-decoration: none;
            }

            .project-bottom a{
                border-radius: 999px;
                height: 40px;
                width: 40;
            }
              

              
            .transUp{
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}
.transUp:hover{
    transform: translatey(-20px);
        -webkit-transform: translatey(-20px);
        -moz-transform: translatey(-20px);
}
              
              
            @media (max-width: 500px){

                .project-item{
                    height: auto;
                }


                .project-image img{
                    width: 70px;

                }

                .project-item.large{
                    width: 80%;
                }

                .project-item.small{
                    width: 60%;
                }

                .project-image{
                    width: 100%;
                    background-color: rgb(246, 218, 85);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .project-item.large > .project-image {
                    height: 180px;
                }
                .project-item.small > .project-image {
                    height: 130px;
                }

                .project-item.large > .project-info{
                    height: calc(100% - 180px);
                }

                .project-item.small > .project-info{
                    height: calc(100% - 100px);
                }


                .project-image{
                    box-sizing: border-box;
                    overflow: hidden;
                    cursor: pointer;
                }

                .project-image-div{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .project-image-div:hover{
                    opacity: 1;
                }
                .project-image img{
                    height: 100%;
                    width: auto;
                    max-width: 100%;
                    scale: 1.2;
                    transition: .4s;
                }



                .project-name{
                    color: rgb(238, 117, 74);
                    width: 70%;
                }

                .project-info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .project-info1{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                .project-item.large .project-name{
                    font-size: 25px;

                }

                .project-item.small .project-name{
                    font-size: 22px;

                }

                .project-bottom{
                    display: flex;
                    flex-direction: row;
                    align-items: end;
                    justify-content: space-between;
                    width: 100%

                }
                .project-description{
                    color: rgb(246, 218, 85);
                    font-weight: 400;
                    width: 75%;
                }

                .github-logo{
                    width: 50%;
                }

                .github-repository{
                    font-size: 35px;
                    color: rgb(238, 117, 74);
                    display: flex;
                    gap: 10px;
                    margin-top: 40px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .section-title{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                    
                }

                .section-title a{
                    text-decoration: none;
                }

                .project-bottom a{
                    border-radius: 999px;
                    height: 40px;
                    width: 40;
                }

            }

            @media (max-height: 830px) {
                .project-item.large .project-description{
                    font-size: 2.2vh;
                }
                .project-item.small .project-description{
                    font-size: 2vh;
                }
            }

            @media (max-height: 730px) {

                .project-item.large{
                    width: 250px;
                }

                .project-item.small{
                    width: 170px;
                }
                    

                .project-item.large > .project-image {
                    height: 140px;
                }
                .project-item.small > .project-image {
                    height: 95px;
                }

                .project-item.large > .project-name {
                    height: 140px;
                }
                .project-item.small .project-name {
                    font-size: 18px;
                }
                
            }
        `}</style>

    </>
  )
}
