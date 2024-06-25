import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { notSaving, removeLike, isSaving, setLikes, addLike, isLoaded, isLiked, isNotLiked } from "./LikesSlice";

export const startLoadLikes = () => {
    return async(dispatch, getState) =>{

        const docRef = doc( FirebaseDB, "likes", "counter");
        const docSnap = await getDoc(docRef);
        const { count } = docSnap.data();

        dispatch( setLikes( count ));

        const liked = localStorage.getItem("liked")

        if (liked == "true") {
            dispatch(isLiked())
        }else{
            dispatch(isNotLiked())
            
        }

        dispatch( notSaving() );
        dispatch( isLoaded() );
    }
}

export const startAddingLike = () => {
    return async(dispatch, getState) =>{

        dispatch( isSaving() );

        const { likesCounter } = getState().likes;
        
        dispatch( addLike() );

        setDoc(doc( FirebaseDB, "likes", "counter"), {
            count: likesCounter+1
          });

        localStorage.setItem("liked", true);

        dispatch( notSaving() );
    };
}

export const startRemovingLike = () => {
    return async(dispatch, getState) =>{

        dispatch( isSaving() );

        const { likesCounter } = getState().likes;

        dispatch( removeLike() );

        setDoc(doc( FirebaseDB, "likes", "counter"), {
            count: likesCounter-1
        });

        localStorage.setItem("liked", false)

        dispatch( notSaving() );
    };
}