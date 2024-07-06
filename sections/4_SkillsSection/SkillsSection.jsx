import { colors } from '@/app/theme'
import { SkillsItem, SkillsItemXS } from './components'
import data from './skills.json'

export const SkillsSection = ({lang}) => {

    const {skills, extraskills } = data

  return (
    <>
        <div className="skills-container" id="skills">
            <div className="section-title">
                {lang == 'es'? 'Habilidades':'Skills'}
            </div>

            <div className="skills">
                <div className="skills-grid">
                { skills.map(skill => (
                    <SkillsItem skill={skill} key={ skill.name }/>
                ))}
                </div>

                <div className="extra-skills">
                    <div className="extras-skills-title">
                    {lang == 'es'? 'Habilidades extra':'Extra Skills'}
                    </div>

                    <div className="skills-grid">
                        { extraskills.map(skill => (
                            <SkillsItemXS skill={skill} key={ skill.name }/>
                        ))}
                    </div>

                </div>

            </div>





        </div>

    <style jsx>{`
      .section-title{
            font-size: 13vw;
      }

      .skills-container{
          min-height: 100vh;
          width: 100%;
          padding-bottom: 200px;
      }

      .skill-item{
          display: flex;
          flex-direction: row;
          gap: 20px;
          justify-content: flex-end;
          color: ${ colors.yellow };
      }

      .skills{
          height: calc(100vh - 260px);
          margin: auto 0;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          padding-bottom: 30px;
          gap: 100px;
      }

      .skills-grid{
          display: grid;
          grid-template-columns: repeat(4, auto);
          row-gap: 50px;
          column-gap: 0px;
      }

      .extras-skills-title{
        color: ${ colors.yellow };
        font-size: 60px;
        font-weight: 700;
        font-family: 'Source Serif Pro', serif;
        width: 85%;
      }

      .extra-skills{
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 80%;
      }


    @media (max-width: 1300px){

          .skills-grid{
            grid-template-columns: repeat(3, auto);
          }
        .skills{
            padding: 0;

        }

    }
    @media (max-width: 1000px){
        .skills-container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .skills{

        }
        .skills-grid{
              grid-template-columns: repeat(3, auto);
              row-gap: 30px;

        }
        .skills-grid{
              grid-template-columns: repeat(2, auto);
        }
        .extras-skills-title{
          font-size: 5vw;
          width: auto;

        }
    }          
    @media (max-width: 500px){
        .skills-container{
            padding-top: 0px;
            padding-bottom: 0px;
        }
        .section-title{
            font-size: ${lang == 'es' && '15vw'};
        }
        .skills-container{
            justify-content: flex-start;
            gap: 30px;
            width: fit-content;
            min-height: auto;
            padding-top: 100px;
        }
        .skills{
            height: auto;
            margin-top: 20px;
            margin-bottom: 40px;

        }
        .skills-grid{
            grid-template-columns: repeat(2, auto);
            justify-content: center;
            align-items: center;
            row-gap: 30px;
            column-gap: 20px;

        }
      }
    `}</style>
    </>

    )
}
