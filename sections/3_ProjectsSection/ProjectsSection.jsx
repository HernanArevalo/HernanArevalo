import { ProjectItem } from './components/ProjectItem';
// import { ProjectItemReduced } from './components/ProjectItemReduced';
import data from './projects-data.json'
import { colors } from '../../app/theme';

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
              <box-icon type='logo' 
                        name='github' 
                        color={ colors.yellow } 
                        size="50px" 
                        className="github-logo"
              ></box-icon>
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
          { otherprojects.filter(project => project.active).map(project => (
            <div className="extra-project" key={project.name}>
              <div className="extra-project-info">

                <div className="extra-project-title">
                  { project.name }
                </div>

                <div className="extra-project-description">
                  { lang === 'es'? project.descriptionEs : project.descriptionEn }
                </div>

                <div className="project-tech">
                {
                    project.technologies.map(tech =>(
                        <img key={tech}
                             src={`/assets/projects-section/technologies/${tech}.png`} 
                             alt="" 
                             srcset="" 
                        />
                    ))
                }
                </div>

              </div>
            </div>

          ))}

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

      .github-repository a:hover{
        background-color: ${ colors.orange };
        color: ${ colors.yellow };
      }

      .projects-extra{
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-bottom: 50px;
      }
      .projects-extra > div{
        width: 60%;
      }
      .extra-project{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: ${ colors.orange };
        box-shadow: 10px 10px ${ colors.yellow };
      }

      .extra-project-info{
        display: flex;
        flex-direction: column;
      }

      .extra-project-title{
        color: ${ colors.blue };
        font-size: 25px;
        font-weight: 700;
      }
      .extra-project-description{
        color: ${ colors.yellow };
        font-size: 18px;
        margin-bottom: 30px;
      }

        .project-tech{
            display: flex;
            gap: 10px;
            width: 100%;
            justify-content: center;
        }

        .project-tech > img{
            width: 50px;
        }

        .projects-extra-title{
          color: ${ colors.yellow };
          font-size: 60px;
          font-weight: 700;
          font-family: 'Source Serif Pro', serif;
          width: 100%;
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
              margin-top: 0px;
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


    `}</style>
    </>
  )
}
