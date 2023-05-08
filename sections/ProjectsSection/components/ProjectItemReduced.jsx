import './styles/ProjectItemReduced.css'


export const ProjectItemReduced = ( {project} ) => {

    const deviceIconSize = () => {
        console.log( window.innerHeight );

        if ( project.size == "s"){
            if ( window.innerHeight <= 1400) {
                console.log( window.innerHeight );
                return "xs"
            }
            return "sm"
        }
        else{
            if ( window.innerHeight <= 1400) {
                return "sm"
            }
            return "md"
        }
    }
    const GithubIconSize = () => {
        return "60px"
    }


    return (
      <>
          <div className={`project-item ${project.size == "s"? "small":"large"}`}>
  
            <a className="project-rectangle" href={ project.url } target="_blank" rel="noopener noreferrer">
                <div className="project-rectangle-div">
                    <div className="project-description">
                        <span>{ project.description }</span>
                    </div>
                    <div className="image">
                        <img src={`/assets/projects-section/${project.image_name}`}/>
                    </div>

                </div>
            </a>
  
                <div className="project-info">
  
                    <div className="project-info1">

                        <div className="project-name">
                            {project.name}
                        </div>

                        <div className="project-devices">
                            { project.mobile ? 
                                <box-icon name='mobile' 
                                        color="rgb(246, 218, 85)"
                                        size={ deviceIconSize }

                                ></box-icon> : null}
                            { project.pc ? 
                                <box-icon name='laptop' 
                                        color="rgb(246, 218, 85)"
                                        size={ ()=>{ return "70px"} }
                                ></box-icon>
                                : null}
                        </div>

                    </div>
                        

                    <div className="project-bottom">

                        <a href={ project.github_url } target="_blank">
                            <box-icon type='logo' 
                                    name='github' 
                                    color="rgb(238, 117, 74)" 
                                    size={ GithubIconSize } 
                                    className="github-logo"
                            ></box-icon>
                        </a>
                    </div>  
                </div>  
  
          </div>
          
        <style jsx>{`
                        
            @media (min-width: 501px) and (max-height: 810px){


            .grid-projects.large{
                height: 48%;
            }
            .grid-projects.small{
                height: 38%;
            }


            .project-item{
                height: 100%;
            }

            .project-rectangle img{
                width: 70px;

            }

            .project-item.large{
                width: 300px;
            }

            .project-item.small{
                width: 200px;
            }

            .project-rectangle{
                width: 100%;
                background-color: rgb(246, 218, 85);
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                overflow: hidden;
                cursor: pointer;
                position: relative;
            }

            .project-item.large > .project-rectangle {
                height: 180px;
            }
            .project-item.small > .project-rectangle {
                height: 100px;
            }

            .project-item.large > .project-info{
                height: calc(100% - 180px);
            }

            .project-item.small > .project-info{
                height: calc(100% - 100px);
            }


            .project-rectangle-div{
                position: absolute;
                top: -100%;
                width: 100%;
                height: 200%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: .4s;
            }

            .project-rectangle-div:hover{
                top: 0%;

            }

            .project-rectangle img{
                height: 100%;
                width: auto;
                max-width: 100%;
                scale: 0.9;
                transition: .4s;
            }

            .project-rectangle:hover img{
                scale: 0.8;
            }

            .project-name{
                color: rgb(238, 117, 74);
                width: 100%;
            }

            .project-info{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .project-info1{
                height: auto;
                width: calc(100% - 55px);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }

            .project-item.large .project-name{
                font-size: 25px;

            }

            .project-item.small .project-name{
                font-size: 22px;

            }

            .project-bottom{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-end;
                width: 55px;

            }
            .project-description{
                color: rgb(238, 117, 74);
                font-weight: 400;
                width: 100%;
                height: 50%;
                z-index: 999;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .github-logo{
                width: 50%;
            }

            .github-repository{
                font-size: 35px;
                color: rgb(238, 117, 74);
                display: flex;
                gap: 10px;
                margin-top: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .section-title{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                
            }

            .section-title a{
                text-decoration: none;
            }

            .project-bottom a{
                border-radius: 999px;
                height: 40px;
                width: 40;
            }

            .image{
                height: 50%;
            }

            }

            @media (max-height: 710px){
            .project-item.large{
                width: 230px;
            }

            .project-item.small{
                width: 150px;
            }
            .project-item.large > .project-rectangle {
                height: 130px;
            }
            .project-item.small > .project-rectangle {
                height: 80px;
            }

            .project-item.large .project-name{
                font-size: 22px;

            }

            .project-item.small .project-name{
                font-size: 18px;
                
            }
            }

        `}</style>
      </>
    )
  }
  