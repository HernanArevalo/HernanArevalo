import { boxShadow, colors } from "@/app/theme"

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

{/* .skill-image:hover .skill-image-svg{
    filter: invert(86%) sepia(20%) saturate(349%) hue-rotate(344deg) brightness(108%) contrast(104%);
}

.skill-image:hover .image-background{
    background-color: ${ colors.orange };
} */}





@media (max-width: 1500px){
    

}

@media (max-width: 1300px){


}

@media (max-width: 500px){


}
      `}</style>
    </>
  )
}
