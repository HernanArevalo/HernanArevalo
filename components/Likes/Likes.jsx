import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { startAddingLike, startLoadLikes, startRemovingLike } from '../../store/likes/thunks.js';

export const Likes = () => {

    const dispatch = useDispatch();
    dispatch( startLoadLikes() )

    const { likesCounter } = useSelector( state => state.likes );
    const { isSaving } = useSelector( state => state.likes );

    useEffect(() => {
        if ( localStorage.getItem("liked") == null){
             localStorage.setItem("liked", "false")
        }

    }, [])
    


    const [liked, setLiked] = useState( false )    
    const [likes, setLikes] = useState( likesCounter )


    useEffect(() => {
        setLikes( likesCounter )
    }, [ likesCounter ])
    

    const onLikeClicked = (e) => {
        e.preventDefault()

        console.log('clicked!')

        if ( localStorage.getItem("liked") == "true" ) {
            dispatch( startRemovingLike() )
            setLiked( "false" )
        }else{
            dispatch( startAddingLike() )
            setLiked( "true" )

        }
    }


  return (
    <>
        <button className="likes-container animate__animated animate__flipInY animate__delay-2s"
             onClick={ onLikeClicked }
             disabled={ isSaving }
             opacity={ "0.5" }
             >
                { liked == "true"?
                        <box-icon type="solid"
                        name='heart'
                        className="likes-heart"
                        color="rgb(238, 117, 74)">
                        </box-icon>
                    :
                        <box-icon type="regular"
                        name='heart'
                        className="likes-heart"
                        color="rgb(238, 117, 74)">
                        </box-icon>
                }

            <div className="likes-counter">{ likes }</div>
        </button>

    <style jsx>{`

        .likes-container{
            cursor: pointer;
            position: absolute;
            height: 45px;
            padding: 0 10px;
            border-radius: 20%;
            background-color: rgb(246, 218, 85);
            border: none;
            top: 3%;
            right: 3.5%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: rgb(42, 93, 131);
            cursor: pointer;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
            z-index: 999;
        }

        .display-none{
            display: none
        }

        .likes-container::after{
            content: "";
            position: absolute;
            top: 44px;
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            
            border-top: 10px solid rgb(246, 218, 85);
        }

        .likes-counter{
            margin-left: 5px;
            font-size: 18px;
            font-weight: 700;
        }

        @media (max-width: 500px) {
            .likes-container{
                top: 100px;
            }
        }
    `}</style>

    
    </>
  )
}
