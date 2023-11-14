import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { startAddingLike, startLoadLikes, startRemovingLike } from '../../store/likes/thunks.js';

//! NEW
import { colors } from '@/app/theme.js';
// !

export const Likes = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadLikes() );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    const { likesCounter, isSaving, isLoaded } = useSelector( state => state.likes );
    const [liked, setLiked] = useState( "false" );

    useEffect(() => {
        if ( localStorage.getItem("liked") == null){
             localStorage.setItem("liked", "false");
        }
        setLiked( localStorage.getItem("liked") );

    }, []);


    const onLikeClicked = (e) => {
        e.preventDefault();

        if ( isSaving ) return;

        if( liked == "true" ){
            setLiked("false");
            dispatch( startRemovingLike() )
        }else{
            setLiked("true");
            dispatch( startAddingLike() )
        }

    };

  return (
    <>
        { isLoaded &&
            // <button className="likes-container animate__animated animate__flipInY animate__delay-2s"
            <button className="likes-container animate__animated animate__flipInY"
                onClick={ onLikeClicked }
                disabled={ isSaving }
                opacity={ "0.5" }
                
            >

                <box-icon type={liked == "true"? "solid":"regular"}
                name='heart'
                className="likes-heart"
                color={ isSaving? colors.grey : colors.orange }>
                </box-icon>
                    

                <div className="likes-counter">
                    { likesCounter }
                </div>

            </button>

        }

    <style jsx>{`

        .likes-container{
            cursor: pointer;
            position: absolute;
            height: 45px;
            padding: 0 10px;
            border-radius: 20%;
            background-color: ${ colors.yellow };
            border: none;
            top: 3%;
            right: 3%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: ${ colors.blue };
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
            
            border-top: 10px solid ${ colors.yellow };
        }

        .likes-counter{
            margin-left: 5px;
            font-size: 18px;
            font-weight: 700;
            color: ${isSaving? colors.grey : colors.blue }
        }

        @media (max-width: 500px) {
            .likes-container{
                position: sticky;
                top: 65px;
                left: 80vw;
                z-index: 10;

            }
        }
    `}</style>

    
    </>
  )
}
