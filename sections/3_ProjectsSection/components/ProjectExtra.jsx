import { colors } from '@/app/theme'
import Head from 'next/head'

export default function Projectexta({ project, lang }) {


  return (
  <>
  <div className="extra-project" key={project.name}>

  <div className="extra-project-info">
    <div className="extra-project-title">
      { project.name }
      { project.name == 'Twitter Lyrics Bot' &&
        <a href='https://twitter.com/frasesdentvg1' target='blank'>
          <div className="twitter-arroba">
            @FrasesDeNTVG1
          </div>
          <div className="twitter-arroba">
            310k followers
          </div>
        </a>
      }
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

<style jsx>{`
  .bxl-github, .bxl-twitter{
    color: ${ colors.blue };
    font-size: 50px;
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
  .twitter-arroba{
    font-size: 15px;
    color: #1a5280;
    font-weight: 600;
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
    align-items: center;
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
      height: 50px;
  }

  @media (max-width: 900px) {
    .bx{
      font-size: 35px;
    }
  @media (max-width: 700px) {
    .project-tech > img{
      width: 40px;
      height: 40px;
    }
  }
  @media (max-width: 500px) {
    .extra-project{
      height: fit-content;
    }
  }
`}</style>
    </>
  )
}