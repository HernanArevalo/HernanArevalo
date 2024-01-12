import { boxShadow, colors } from "@/app/theme"

export const SkillsItemXS = ({skill}) => {


  return (
<>
    <div className='skill-item-xs'>

        <div className="skill-name-xs">
            {skill.name.toUpperCase()}
        </div>
            
        <div className="skill-image-xs">
            <img src={`/assets/skills-section/${skill.image_file}`} 
                 className="skill-image-svg-xs"
            />
        </div>

    </div>

<style jsx>{`

.skill-item-xs{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-end;
    color: ${ colors.yellow };

}

.skill-name-xs{
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    font-size: 20px;
    text-align: end;
    font-weight: 600;
    word-spacing: 9999rem;
}

.skill-image-xs{
    width: 80px;
    height: 80px;
    background-color: ${ colors.yellow };
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px ${ colors.orange };

}

.skill-image-svg-xs{
    width: 65%;
    height: 65%;
    margin: 0% auto;
    margin: 0 10%;
    filter: invert(53%) sepia(26%) saturate(7241%) hue-rotate(171deg) brightness(107%) contrast(103%);
    transition: .5s;
}

@media (max-width: 1500px){
    .skill-item-xs{
        display: ${ skill.responsive ? "flex" : "none"};
        margin-right: 20px;

    }
    .skill-name-xs{
        width: 100px;
    }
    .skill-image-xs{
        width: 60px;
        height: 60px;
    }
}

@media (max-width: 1000px){
    .skill-item-xs{
        display: flex;
        margin-right: 20px;

    }
    .skill-image-xs{
        width: 5vw;
        height: 5vw;
    }
    .skill-name{
        font-size: 2vw;
    }

}

@media (max-width: 500px){
    .skill-name-xs{
        font-size: 2.2vw;
        width: min-content;

    }
    .skill-image-xs{
        width: 10vw;
        height: 10vw;
    }
    .skill-name-xs{
        font-size: 3.5vw;
    }
}
      `}</style>
    </>
  )
}
