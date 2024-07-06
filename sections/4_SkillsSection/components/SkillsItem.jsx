import { colors } from "@/app/theme"

export const SkillsItem = ({skill}) => {


  return (
<>
    <div className='skill-item'>

        <div className="skill-name">
            {skill.name.toUpperCase()}
        </div>
            
        <div className="skill-image">
            <img src={`/assets/skills-section/${skill.image_file}`} 
                 className="skill-image-svg"
                 alt={`${skill.name.toLowerCase()} logo`}
            />
        </div>


    </div>

<style jsx>{`

.skill-item{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-end;
    color: ${ colors.yellow };

}

.skill-name{
    width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    font-size: 25px;
    text-align: end;
    font-weight: 600;
    word-spacing: 9999rem;
}

.skill-image{
    width: 120px;
    height: 120px;
    background-color: ${ colors.yellow };
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px ${ colors.orange };

}

.skill-image-svg{
    width: 65%;
    height: 65%;
    margin: 0% auto;
    margin: 0 10%;
    filter: invert(53%) sepia(26%) saturate(7241%) hue-rotate(171deg) brightness(107%) contrast(103%);
    transition: .5s;
}

@media (max-width: 1500px){
    .skill-item{
        display: ${ skill.responsive ? "flex" : "none"};
        margin-right: 20px;

    }
    .skill-name{
        width: 150px;
    }
    .skill-image{
        width: 100px;
        height: 100px;
    }
}

@media (max-width: 1000px){
    .skill-item{
        display: flex;
        margin-right: 20px;

    }
    .skill-image{
        width: 7vw;
        height: 7vw;
    }
    .skill-name{
        font-size: 2.2vw;
    }

}

@media (max-width: 500px){
    .skill-name{
        font-size: 2.2vw;
        width: min-content;

    }
    .skill-image{
        width: 14vw;
        height: 14vw;
    }
    .skill-name{
        font-size: 3.5vw;
    }
}
      `}</style>
    </>
  )
}
