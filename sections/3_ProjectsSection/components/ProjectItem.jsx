import { colors } from '@/app/theme'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export const ProjectItem = ( { project, lang } ) => {


  return (
    <>
    <div className={`project-item ${project.size == "s"? "small":"large"}`}>

        <a className="project-image" href={ project.url } target="_blank" rel="noopener noreferrer">
        <div className="project-image-div">
            <img src={`/assets/projects-section/projects/${project.image1}.jpg`}/>
            <img src={`/assets/projects-section/projects/${project.image2}.jpg`}/>
        </div>
        </a>

        <div className="project-info">

            <div className="project-info1">
                <div className="project-name">{project.name}</div>
                <div className="project-devices">
                  {project.mobile == true? 
                      <box-icon name='mobile' 
                                color={ colors.blue }
                                size={ project.size == "s"? "sm":"md"}

                      ></box-icon> : null}
                  {project.pc == true? 
                      <box-icon name='laptop' 
                                color={ colors.blue }
                                size={ project.size == "s"? "sm":"md"}
                      ></box-icon>
                      : null}
                </div>
            </div>
              
            <div className="project-description">
                { lang === 'es'? project.descriptionEs : project.descriptionEn }
            </div>

            <div className="project-tech">
                {
                    project.technologies.map(tech =>(
                        <img key={tech}src={`/assets/projects-section/technologies/${tech}.png`} alt="" />
                    ))
                }

            </div>

            <div className="project-bottom">
            
                <a href={ project.github_url } target="_blank">
                    <div className="project-button">
                        <i className='button-icon bx bxl-github'></i>
                        REPOSITORY
                    </div>
                </a>
                <a href={ project.url } target="_blank">
                    <div className="project-button">
                        <i className='button-icon bx bx-fullscreen'></i>
                        { lang === 'es'? 'DESPLEGAR' : 'DEPLOY' }
                    </div>
                </a>

            </div>
          </div>

        </div>

    <style jsx>{`
                

        .project-item{
            box-shadow: 10px 10px ${ colors.yellow };
        }

        .project-image img{
            width: 50%;
        }

        .project-item.large{
            width: fit-content;
            background-color: ${ colors.orange };
            color: ${ colors.orange };
        }

        .project-item.small{
            width: 200px;
        }

        .project-image{
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .project-image-div{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${ colors.black };
            gap: 2px;
            overflow: hidden;

        }

        .project-screenshot{
            width: 100%;
            z-index: 500;
        }

        .project-image > img{
            width: 50%;
            object-fit: cover;
        }


        .project-name{
            color: ${ colors.blue };
            font-weight: 700;
        }

        .project-info{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
            padding-bottom: 20px;
            gap: 20px;
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
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
            gap: 10px;
            flex-wrap: wrap;
        }
        .project-description{
            color: ${ colors.yellow };
            font-weight: 400;
            width: calc(100% - 50px);
        }

        .large .project-description{
            font-size: 18px;

        }
        .small .project-description{
            font-size: 17px;

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

        .project-button:hover{
            background-color: ${ colors.blue };

        }
        a{
            text-decoration: none;
        }
        .project-bottom > a > div {
            color: ${ colors.blue };
            background-color: ${ colors.yellow };
            width: fit-content;
            text-align: center;
            padding: 15px;
            font-weight: 800;
            transition: .2s;
        }
        .project-bottom > a > div:hover {
            background-color: ${ colors.blue };
            color: ${ colors.yellow};
        }
        .project-bottom > a > div:hover .github-icon {
            color: ${ colors.yellow};
        }
        .project-button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

        }
        .button-icon{
            font-size: 25px;
        }
        .project-tech-icon{
            color: ${ colors.blue };
            font-size: 20px;
        }
        .project-tech{
            display: flex;
            gap: 10px;
        }
        .project-tech > img{
            width: 50px;
        }

    `}</style>

    </>
  )
}
