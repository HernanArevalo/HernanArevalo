import { colors } from '@/app/theme'
import { useEffect, useState } from 'react'

export const Navbar = () => {

    const [innerWidth, setInnerWidth] = useState( 501 )


    const [windowWidth, setWindowWidth] = useState(null);
  
    useEffect(() => {
      // Verificar si estamos en el lado del cliente antes de acceder a window
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
  
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);
    
     

  return (
    <>
    <div className={`navbar animate__animated ${innerWidth > 500?'animate__fadeInLeft':'animate__fadeInDown'}`}>
    <nav>
			<ul className="navbar-list">

        <li className="navbar-item">
					<a href="#home">
						<span>Home</span>
						<div className="navbar-icon">
								<box-icon type='solid' name='home' size={windowWidth > 500?"md":"25px"} color={ colors.blue }></box-icon>
						</div>
					</a>
				</li>

				<li className="navbar-item">
					<a href="#me">
						<span>Me</span>
						<div className="navbar-icon">
								<box-icon type='solid' name='user' size={windowWidth > 500?"md":"25px"} color={ colors.blue }></box-icon>
						</div>
					</a>
				</li>

				<li className="navbar-item">
						<a href="#projects">
              <span>Projects</span>
              <div className="navbar-icon">
                <box-icon name='collection' size={windowWidth > 500?"md":"25px"} color={ colors.blue }></box-icon>
              </div>
						</a>
				</li>

				<li className="navbar-item">
          <a href="#skills">
            <span>Skills</span>
            <div className="navbar-icon">
              <box-icon name='select-multiple' size={windowWidth > 500?"md":"25px"} color={ colors.blue }></box-icon>
            </div>
          </a>
				</li>

				<li className="navbar-item">
          <a href="#contact">
            <span>Contact</span>
            <div className="navbar-icon">
              <box-icon type='solid' name='send' size={windowWidth > 500?"md":"25px"} color={ colors.blue }></box-icon>
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
    background-color: ${ colors.yellow };
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
    border-right: 8px solid ${ colors.orange };
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
    background-color: ${ colors.yellow };
    width: 200px;
    border-right: 8px solid ${ colors.orange };
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
    color: ${ colors.blue };
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
    color: ${ colors.blue };
}

@media (max-width: 500px) {
    .navbar{
        position: fixed;
        width: 100vw;
        height: 50px;
        left: 0px;
        top: 0px;
        border-bottom: 5px solid ${ colors.orange };


    }
    .navbar nav{
        height: 100%;
        border-right: 0px;


    }
    .navbar-list{
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;

  
    }
    .navbar-item a span{
        display: none;
    }
    .navbar-item{
        border-right: 0px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: auto;
    }
    .navbar-icon{
        margin: 0;
        height: auto;
    }
    .navbar-item:hover{
        transform: translateX(0px);
    }
    .navbar-item a{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: auto;
    }
}
	`}</style>
</>
)
}
