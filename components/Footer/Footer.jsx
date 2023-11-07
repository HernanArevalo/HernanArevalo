
import { colors } from '@/app/theme'
import Head from 'next/head'

export default function Footer() {


  return (
    <>
    <div className='footer'>
        <div className="footer-left">
            <div className="footer-name">
                Hernán Arévalo
            </div>
            <div className="footer-email">
                hernanarevalo16@gmail.com
            </div>
            
        </div>
        <div className="footer-icons">
            <a href="https://www.linkedin.com/in/arevalo-hernan" target="_blank">
                <div className="footer-icon-div">
                    <i className='footer-icon-font bx bxl-linkedin'></i>
                </div>
            </a>
            <a href="https://www.github.com/HernanArevalo" target="_blank">
                <div className="footer-icon-div">
                    <i className='footer-icon-font bx bxl-github'></i>
                </div>
            </a>

        </div>
    </div>

    <style jsx>{`
    .footer{
        width: 100%;
        color: ${ colors.blue};
        background-color: ${ colors.orange };
        border-top: 5px solid ${ colors.yellow };
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 0px 100px;
        align-items: center;
        padding: 15px 50px;
    }
    .footer-name{
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
    }
    .footer-email{
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
    }

    .footer-icons{
        display: flex;
        flex-direction: row;
    }
    .footer-icons{
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: flex-end;
        gap: 10px;

    }
    .footer-icon-div{
        background-color: ${ colors.orange };
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 5px;
        transition: .3s;
        background-color: ${ colors.yellow };
        box-shadow: 2px 2px ${ colors.blue };
    }
    .footer-icon-div:hover{
        background-color: ${ colors.blue };

    }
    .footer-icon-div:hover > .footer-icon-font{
        color: ${ colors.yellow };

    }
    .footer-icon-font{
        font-size: 25px;
        color: ${ colors.blue };
    }

    a{
        text-decoration: none;
    }
    @media (max-width: 500px){
        .footer-name{
            font-size: 16px;
        }
        .footer-email{
            font-size: 12px;
        }

        .footer{
            padding: 10px 20px;
        }

    }

    `}</style>
    </>
  )
}