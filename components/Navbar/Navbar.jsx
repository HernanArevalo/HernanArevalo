import { useEffect, useState } from 'react'

export const Navbar = () => {

    const [innerWidth, setInnerWidth] = useState( 501 )


    useEffect(() => {
            
        //console.log('window.innerHeight', window.innerHeight)
        //setInnerWidth( window.innerHeight )
        
    }, [])
    
     

  return (
    <>
    <div className={`navbar animate__animated ${innerWidth > 500?'animate__fadeInLeft':'animate__fadeInDown'}`}>
    <nav>
			<ul className="navbar-list">

				<li className="navbar-item">
					<a href="#me">
						<span>Me</span>
						<div className="navbar-icon">
								<box-icon type='solid' name='user' size="md" color="rgb(42, 93, 131)"></box-icon>
						</div>
					</a>
				</li>

				<li className="navbar-item">
						<a href="#projects">
              <span>Projects</span>
              <div className="navbar-icon">
                <box-icon type='solid' name='collection' size="md" color="rgb(42, 93, 131)"></box-icon>
              </div>
						</a>
				</li>

				<li className="navbar-item">
          <a href="#skills">
            <span>Skills</span>
            <div className="navbar-icon">
              <box-icon name='select-multiple' size="md" color="rgb(42, 93, 131)"></box-icon>
            </div>
          </a>
				</li>

				<li className="navbar-item">
          <a href="#contact">
            <span>Contacts </span>
            <div className="navbar-icon">
              <box-icon type='solid' name='send' size="md" color="rgb(42, 93, 131)"></box-icon>
            </div>
          </a>
				</li>		

			</ul>

    </nav>
  </div>
	<style jsx>{`
		
.navbar{
    height: 100vh;
    width: 200px;
    background-color: rgb(246, 218, 85);
    position: fixed;
    left: -112px;
    top: 0;
    margin: 0;
    z-index: 9999999;
}
  
  .navbar nav{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 8px solid rgb(238, 117, 74);
    justify-content: center;
    box-sizing: border-box;

  }
  
  
  .navbar-list{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: 70%;

    }

.navbar-item{
    list-style: none;
    background-color: rgb(246, 218, 85);
    width: 200px;
    border-right: 8px solid rgb(238, 117, 74);
    box-sizing: border-box;
    height: 80px;
    position: relative;
    transition: .7s;
}

.navbar-item:hover{
    transform: translateX(112px);
}

.navbar-item a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    text-decoration: none;


}

.navbar-item a span{
    margin: auto;
    font-family: 'Source Serif Pro', serif;
    font-weight: 700;
    color: rgb(42, 93, 131);
    font-size: 23px;
}
.navbar-icon{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
}

.navbar-icon box-icon{
    color: rgb(42, 93, 131);
}

@media (max-width: 500px) {
    .navbar{
        width: 100vw;
        height: 80px;
        left: 0px;
        top: 0;
        border-bottom: 5px solid rgb(238, 117, 74);

    }
    .navbar nav{
        height: auto;
        border-right: 0px;


    }
    .navbar-list{
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: 70%;

  
    }
    .navbar-item a span{
        display: none;
    }
    .navbar-item{
        width: 80px;
        border-right: 0px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navbar-icon{
        margin: 0;
    }
    .navbar-item:hover{
        transform: translateX(0px);
    }
}
	`}</style>
</>
)
}
