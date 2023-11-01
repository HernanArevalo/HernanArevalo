import { ProjectItem } from './components/ProjectItem';
// import { ProjectItemReduced } from './components/ProjectItemReduced';
import data from './projects-data.json'
import { colors } from '../../app/theme';
import Link from 'next/link';

export const ProjectsSection = ({info, lang}) => {

  const { projects, otherprojects } = data

  return (
    <>
    <div className="projects-container" id="projects">

        <div className="projects-top">

          <div className="section-title">
            {info.projects.title}
          </div>

          <div className="github-repository">
            <a href="https://github.com/HernanArevalo" target="_blank">
              { info.projects.respository }
              <i className='bx bxl-github'></i>
            </a>
          </div>

        </div>

        <div className="grid-projects large">
          { projects.filter(project => project.size == "l").map(project => (
            <ProjectItem key={ project.name } project={ project } lang={lang} />
          ))}
        </div>

        <div className='projects-extra'>

          <div className="projects-extra-title">
            {info.otherprojects.title}
          </div>

          <div className="projects-extra-container">
            { otherprojects.filter(project => project.active).map((project, idx) => (
              <div className="extra-project" key={project.name}>

                <div className="extra-project-info">
                  <div className="extra-project-title">
                    { project.name }
                  </div>

                  <div className="extra-project-description">
                    { lang === 'es'? project.descriptionEs : project.descriptionEn }
                  </div>

                <div className="project-icons">
                  <div className="url-icons">
                    <a href={ project.github_url } target='blank'>
                      <div className="github-logo">
                        <i className='home-icon-font bx bxl-github' />
                      </div>
                    </a>

                    { project.name == 'Twitter Lyrics Bot' &&
                      <a href='https://twitter.com/frasesdentvg1' target='blank'>
                        <div className="github-logo">
                          <i className='bx bxl-twitter'></i>
                        </div>
                      </a>
                    }
                  </div>

                  <div className="project-tech">
                    {
                      project.technologies.map(tech =>(
                          <img key={tech}
                              src={`/assets/projects-section/technologies/${tech}.png`} 
                              alt="" 
                          />
                            
                      ))
                    }
                  </div>
                </div>
                </div>

              </div>

            ))}

          </div>


        </div>
          
    </div>

    <style jsx>{`
      svg, path{
        width: 100px;
        height: 100px;
      }

      .projects-container{
          min-height: 100vh;
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 60px;
      }
      a{
          text-decoration: none;
      }
      .projects-top{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
      }

      .projects-top > span{
          font-size: 220px;
          line-height: 180px;
          color: ${ colors.yellow };
          margin: 0;
      }


      .grid-projects.large{
          display: grid;
          grid-template-columns: repeat(3, 25%);
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          gap: 50px;
      }
      .grid-projects.small{
          height: 35%;
      }

      .github-repository{
          align-items: flex-end;
          display: flex;
          text-align: end;
      }

      .github-repository a{
          padding: 15px;
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          color: ${ colors.orange };
          font-size: 30px;
          transition: .3s;
      }
      .bxl-github{
        color: ${ colors.yellow };
        font-size: 50px;
      }

      .projects-extra{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        margin-bottom: 100px;
        width: 100%;
      }
      
      .projects-extra-title{
        color: ${ colors.yellow };
        font-size: 60px;
        font-weight: 700;
        font-family: 'Source Serif Pro', serif;
        width: 85%;
      }

      .github-repository a:hover{
        background-color: ${ colors.orange };
        color: ${ colors.yellow };
      }

      .projects-extra-container{
        display: grid;
        justify-content: center;
        align-items: flex-start;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(2,45%);
        gap: 50px;
        width: 85%;
      }

      .extra-project{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: ${ colors.orange };
        box-shadow: 10px 10px ${ colors.yellow };
        gap: 15px;
      }

      .extra-project-info{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .extra-project-title{
        color: ${ colors.blue };
        font-size: 25px;
        font-weight: 700;
        width: 100%;
      }
      .extra-project-description{
        color: ${ colors.yellow };
        font-size: 18px;
      }
      a{
        text-decoration: none;
        color: ${ colors.blue };
      }
      .project-icons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 95%;
        color: ${ colors.blue };
      }
      .url-icons{
        display: flex;
        flex-direction: row;
        gap: 20px;
      }

      .github-logo{
        font-size: 40px;
        background-color: ${ colors.yellow };
        box-shadow: 5px 5px ${ colors.blue };
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding: 5px;
        transition: .3s;
      }
      .github-logo:hover{
        color: ${ colors.orange };
        background-color: ${ colors.blue };
        box-shadow: 5px 5px ${ colors.yellow };
      }

      .project-tech{
          display: flex;
          flex-direction: row;
          gap: 10px;
          justify-content: center;
      }

      .project-tech > img{
          width: 50px;
      }


      @media (max-width: 500px) {
          .projects-container{
              height: auto;
          }
          .projects-top{
              flex-direction: column;
              height: auto;
          }
          .projects-top > div{
              height: auto;
          }
          .project2-container{
              height: auto;
              margin-top: 40px;
          }

          .github-repository{
              flex-direction: row-reverse;
              justify-content: flex-start;
              font-size: 6vw;
              margin-top: 20px;
          }

          .github-repository a{
              align-items: center;

          }

          .grid-projects.large,.grid-projects.small{
              height: auto;
              flex-direction: column;
              align-items: center;
          }

          .project-description{
              font-size: 5vw;
              width: calc(100% - 40px);
          }
          .grid-projects.small{
              margin-top: 50px;
          }


      }

      @media (max-height: 830px) {
          .project2-container{
              gap: 40px;
              height: auto;
          }
          
      }

      @media (max-height: 800px) {
          .project2-container{
              gap: 20px;
          }
          
      }
      @media (max-width: 500px) {
        .section-title{
          font-size: 18vw;
        }
        .github-repository {
          margin-top: 0px;
        }
        .github-repository a{
          font-size: 5vw;
          padding: 5px;

        }
        .bxl-github{
          font-size: 10vw;
        }

        .projects-container{
          gap: 40px;
        }


    `}</style>
    </>
  )
}
