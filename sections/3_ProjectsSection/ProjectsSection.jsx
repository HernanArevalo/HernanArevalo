import { ProjectItem } from './components/ProjectItem';
// import { ProjectItemReduced } from './components/ProjectItemReduced';
import data from './projects-data.json'
import { colors } from '../../app/theme';
import Projectexta from './components/ProjectItemExtra';

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
              <i className='bx bxl-github github-top'></i>
            </a>
          </div>

        </div>

        <div className="grid-projects large">
          { projects.filter(project => project.size == "l").map(project => (
            <ProjectItem key={ project.name } project={ project } lang={ lang } />
          ))}
        </div>

        <div className='projects-extra'>

          <div className="projects-extra-title">
            {info.otherprojects.title }
          </div>

          <div className="projects-extra-container">
            { otherprojects.filter(project => project.active).map((project, idx) => (

              <Projectexta key={ project.name }project={ project } lang={ lang }/>

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

      .grid-projects{
          display: grid;
          grid-template-columns: repeat(3, 25%);
          justify-content: center;
          width: 100%;
          gap: 50px;
      }

      .github-repository{
          align-items: flex-end;
          display: flex;
          text-align: end;
      }

      .github-repository a{
          align-items: center;
          background-color: ${ colors.yellow };
          border-radius: 10px;
          color: ${ colors.orange };
          display: flex;
          flex-direction: row;
          font-size: 30px;
          gap: 10px;
          justify-content: flex-end;
          padding: 15px;
          transition: .3s;
      }
      .bxl-github, .bxl-twitter{
        color: ${ colors.blue };
        font-size: 50px;
      }
      .github-repository a:hover{
        background-color: ${ colors.orange };
        color: ${ colors.yellow };
      }
      
      .projects-extra-title{
        color: ${ colors.yellow };
        font-size: 60px;
        font-weight: 700;
        font-family: 'Source Serif Pro', serif;
        width: 85%;
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


      .projects-extra-container{
        display: grid;
        justify-content: center;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(2,45%);
        gap: 50px;
        width: 85%;
      }

      @media (max-width: 1500px) {
        .grid-projects{
          grid-template-columns: repeat(2,40%);
          gap: 60px;
        }
        .projects-extra-container{
          grid-template-columns: repeat(2,50%);
          gap: 60px;
        }
      }
      @media (max-width: 1200px) {
        .github-repository a{
            font-size: 22px;
            padding: 10px;

        }
        .github-top{
          font-size: 40px;
        }
        .projects-top{
          flex-direction: column;
          gap: 60px;
          width: 100%;
          align-items: center;
        }
        .section-title{
          height: auto;
          width: 100%;

        }

        .projects-container{
          gap: 30px
        }
        .projects-extra-container{
          grid-template-columns: repeat(1, 60vw);
          gap: 50px;
        }

      }
      @media (max-width: 900px) {
        .grid-projects{
          grid-template-columns: repeat(1,80%);
          gap: 60px;

        }
        .project.description{
          min-height: 0;
        }
        .projects-extra-container{
          grid-template-columns: repeat(1, 70vw);
          gap: 50px;
        }
        .projects-extra{
          margin-top: 45px;
          gap: 20px;
        }

      }

      @media (max-width: 500px) {
        .projects-container{
            padding-top: 80px;
            min-height: auto;
        }
        .grid-projects{
          grid-template-columns: repeat(1,95%);
          padding-right: 10px;
          gap: 60px;

        }
        .projects-extra{
          width: 100%;
          gap: 20px;
          margin-top: 0px;
          margin-bottom: 0;
        }
        .projects-extra-container{
          display: flex;
          flex-direction: column;
        }
        .projects-extra-title{
          font-size: 10vw;
          margin-top: 50px;
          width: 95%;
        }
        .projects-top{
          gap: 30px;

      }

    `}</style>
    </>
  )
}
