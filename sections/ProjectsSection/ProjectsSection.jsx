import { ProjectItem } from './components/ProjectItem';
// import { ProjectItemReduced } from './components/ProjectItemReduced';
import data from './projects-data.json'
import { colors } from '../../app/theme';
import Image from 'next/image';

export const ProjectsSection = ({info}) => {

  const projects = data.projects

  return (
    <>
    <div className="projects-container" id="projects">
        <div className="project1-container">

          <div className="project1-gri1-container">
            <div className="section-title">
              { info.projects.title.map(
                (letter,idx) => 
                (<span key={`${letter}${idx}`} className='section-title-word'>{letter}</span>)
              )}
            </div>
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


        <div className="project2-container">
          <div className="grid-projects large">
            { projects.filter(project => project.size == "l").map(project => (
              <ProjectItem key={ project.name } project={ project }/>
            ))}
          </div>

          <div className="grid-projects small">
            { projects.filter(project => project.size == "s").map(project => (
              <ProjectItem key={ project.name } project={ project }/>
            ))}

          </div>
        </div>
        <div className='projects-extra'>
          <div className="project-extra bot-twitter">

              <div className="extra-project-info">

                <div className="extra-project-title">
                  Twitter Bot with Python
                </div>

                <div className="extra-project-description">
                  Created a Python Twitter Bot that tweets songs from a band at regular intervals using the Twitter API. 
                  Increased engagement and reach within the music community, boosting followers and user interaction. 
                  Developed skills include Python, Twitter API, bot programming, and problem-solving.
                </div>

              </div>

                <div className='twitter-bot-logo' >
                  <img alt="twitter-bot-logo" src={`/assets/projects-section/bot-logo.svg`}></img>
                </div>
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
          gap: 20px;
      }
      a{
          text-decoration: none;
      }
      .project1-container{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
      }

      .project1-container > span{
          font-size: 220px;
          line-height: 180px;
          color: ${ colors.yellow };
          margin: 0;
      }

      .project2-container{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: calc(100vh - 300px);
          gap: 20px;

      }

      .grid-projects{
          display: flex;
          flex-direction: row;
          justify-content: end;
          gap: 40px;
      }

      .grid-projects.large{
          height: 48%;
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
          border-radius: 30px;
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
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .project-extra{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 20px;
        background-color: ${ colors.orange };
        max-width: 800px;
        border-radius: 25px;
      }

      .extra-project-info{
        display: flex;
        flex-direction: column;
      }

      .extra-project-title{
        color: ${ colors.blue };
        font-size: 23px;
      }
      .extra-project-description{
        color: ${ colors.yellow };
        font-size: 18px;
      }

      .twitter-bot-logo{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

      }
      .twitter-bot-logo img{
        filter: invert(56%) sepia(84%) saturate(2291%) hue-rotate(92deg) brightness(132%) contrast(112%);
        width: 50px;
        margin-left: 100px;
      }


      @media (max-width: 500px) {
          .projects-container{
              height: auto;
          }
          .project1-container{
              flex-direction: column;
              height: auto;
          }
          .project1-container > div{
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
