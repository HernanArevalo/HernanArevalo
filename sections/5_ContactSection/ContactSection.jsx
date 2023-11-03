import { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import { colors } from '@/app/theme'

export const ContactSection = ({info}) => {

  const [copied, setCopied] = useState(false)

  const onClickEmail = () => {


    navigator.clipboard.writeText('hernanarevalo16@gmail.com')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000);

  }

  const { formState, onInputChange, onResetForm, name, email, message } = useForm({
    name: '',
    email: '',
    message: ''
  })


  return (
    <>
      <div className="contact-container" id="contact">

        <div className="section-title">
            {info.contact.title}
        </div>
          <div className="contact">
            <div className="contact-left">


            <div className="contact-email">
                <a>
                    <box-icon 
                            color={ colors.orange }
                            name='at'
                            size="lg"
                            onClick={ onClickEmail }
                            >
                    </box-icon>
                </a>
                <div className="email-container">
                <div className='email' onClick={ onClickEmail }>
                    hernanarevalo16@gmail.com
                </div>
                {copied? 
                    <div className='copied'>
                        { info.contact.emailCopied }
                    </div>
                    : 
                    null
                }
                </div>
            </div>

            <div className="linkedin-email">
                <a href="https://linkedin.com/in/arevalo-hernan" target="_blank" rel="noopener noreferrer">
                    <box-icon 
                            color={ colors.orange }
                            name='linkedin-square'
                            type='logo'
                            size="lg">
                    </box-icon>
                </a>
                <div className="linkedin-link">
                    <a href="https://linkedin.com/in/arevalo-hernan" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/arevalo-hernan
                    </a>
                </div>
            </div>

            <div className="github-email">
                <a href="https://github.com/HernanArevalo" target="_blank" rel="noopener noreferrer">
                    <box-icon color={ colors.orange }
                            name='github'
                            type='logo'
                            size="lg">
                    </box-icon>
                </a>
                <div className="linkedin-link">
                    <a href="https://github.com/HernanArevalo" target="_blank" rel="noopener noreferrer">
                    github.com/HernanArevalo
                    </a>
                </div>
            </div>

            </div>
            <div className="contact-right">
              <form 
                    target="_blank" 
                    action="https://formsubmit.co/hernanarevalo16@gmail.com" 
                    method="POST"
              >
                <label>{ info.contact.name }</label>
                <input 
                        type="text" 
                        className='name-input' 
                        name='name'
                        value = { name }
                        onChange = { onInputChange }
                />
                <label>{ info.contact.email }</label>
                <input 
                        type="text" 
                        className='email-input' 
                        name='email'
                        value = { email }
                        onChange = { onInputChange }
                />
                <label>{ info.contact.message }</label>
                <textarea 
                        type="text" 
                        className='message-input' 
                        name='message'
                        value = { message }
                        onChange = { onInputChange }
                />
                <button disabled={name.trim() == '' || message.trim() == ''} className="submit-button"type="submit" onClick={ onResetForm }>{ info.contact.send }</button>
              </form>
            </div>
          </div>
      </div>

      <style jsx>{`
        .contact-container{
            height: 100vh;
            width: 100%;
            overflow-x: hidden;
        }

        .contact{
            display: flex;
            flex-direction: row;
            height: calc(100vh - 260px);
            font-size: 25px;
            padding-bottom: 70px;

        }

        .contact-left, .contact-right{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }


        .contact-left{
            color: ${ colors.yellow };
            gap: 30px;
            
        }
        .contact-left > div{
            font-weight: 600;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

        }

        .contact-right form{
            display: flex;
            flex-direction: column;
            color: ${ colors.orange };
            width: 100%;
            gap: 10px;
        }

        label{
            font-weight: 600;

        }

        textarea, input{
            width: 80%;
            background-color: ${ colors.yellow };
            border: none;
            font-size: 25px;
            box-shadow: 5px 5px ${ colors.orange };
            line-height: 25px;
            color: ${ colors.blue };
            padding: 10px 10px;
            font-weight: 600;
            resize: none;
            outline: none;
            margin-bottom: 15px;
        }

        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 50px ${ colors.yellow } inset;
            -webkit-text-fill-color: ${ colors.blue };
        }

        input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 50px ${ colors.yellow } inset;
            -webkit-text-fill-color: ${ colors.blue };
        } 

        textarea:focus{
            outline: none;
        }
        .name-input, .email-input{
            height: 45px;
        }
        .message-input{
            height: 120px;
        }

        .email, .linkedin-link{
            cursor: pointer;
            font-size: 30px;

        }
        .email:hover{
            text-decoration: underline;
        }

        .linkedin-link a{
            text-decoration: none;
            color: ${ colors.yellow };
        }

        .linkedin-link:hover{
            text-decoration: underline;
        }


        .email-container{
            height: 60px;
        }

        .copied{
            color: ${ colors.orange };
            font-size: 20px;
        }

        .submit-button{
            font-family: 'Source Serif Pro', serif;
            color: ${ colors.yellow };
            background-color: ${ colors.orange };
            box-shadow: 5px 5px ${ colors.yellow };

            font-size: 25px;
            height: 45px;
            width: 35%;
            border: none;
            outline: none;
            cursor: pointer;
            transition: .4s;
            margin-top: 5px;
        }

        .submit-button:hover:enabled{
            scale: 0.9;

        }

        .submit-button:disabled{
            filter: grayscale();

        }
        .contact-icon{
            cursor: pointer;
        }

        @media (max-width: 1400px) {
            .contact{
                height: calc(100% - 215px);

            }
            input,textarea{
                font-size: 18px;
            }
            .contact-right form{
                gap: 5px;
            }

            textarea, input{
                width: 90%;
            }

        }

        @media (max-width: 500px){
            .contact-container{
                height: auto;
            }

        
            .contact{
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
            }

            .contact-left{
                width: 100%;
            }

            .email-container, .linkedin-link{
                height: auto;
                top: -10px;
                position: relative;
            }

            .email, .linkedin-link{
                font-size: 5vw;
            }

            .contact-right{
                margin-top: 40px;
                width: 85%;
            }

        }
      `}</style>
    </>
    )
}
