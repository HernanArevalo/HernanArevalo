import { colors } from '@/app/theme'
import { SkillsItem } from './components/SkillsItem'


export const SkillsSection = ({ info, lang }) => {

    console.log( lang )

  return (
    <>
        <div className="skills-container" id="skills">
            <div className="section-title">
                {lang == 'es'? 'Habilidades':'Skills'}
            </div>

            <div className="skills">
                <div className="skills-grid">
                { info.skills.items.map(skill => (
                    <SkillsItem skill={skill} key={ skill.name }/>
                ))}
                </div>
            </div>

        </div>

    <style jsx>{`
      .section-title{
            font-size: 13vw;
      }

      .skills-container{
          height: 100vh;
          width: 100%;
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
          justify-content: center;
          align-items: center;
          padding-bottom: 75px;
      }

      .skills-grid{
          display: grid;
          grid-template-columns: repeat(4, auto);
          row-gap: 50px;
          column-gap: 0px;
      }

      @media (max-width: 1500px){
          .skills-grid{
            grid-template-columns: repeat(3, auto);
          }
      }

      @media (max-width: 1300px){
        .section-title{
            font-size: 20vw;
        }
        .skills{
            padding: 0;
        }

      }
      @media (max-width: 1000px){
        .skills-container{
            height: 100vh;
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
    @media (max-width: 1000px){
        .skills-grid{
              grid-template-columns: repeat(2, auto);
        }
    }          
    @media (max-width: 500px){
        .skills-container{
            padding-top: 80px;
        }
        .section-title{
            font-size: ${lang == 'es'? '15vw':'Habilidades'};
        }
        .skills-container{
            height: auto;
        }
        .skills{
            height: auto;
            margin-top: 20px;
        }
        .skills-grid{
            grid-template-columns: repeat(2, auto);
            width: 100vw;
            justify-content: center;
            align-items: center;
            row-gap: 30px;
            column-gap: 20px;
            align-items: start;
        }
      }
    `}</style>
    </>

    )
}
