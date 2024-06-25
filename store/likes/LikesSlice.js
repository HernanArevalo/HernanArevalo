import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        likesCounter: '',
        isLoaded: false,
        isSaving: true,
        liked: false,
        likedOnSession: false
    },
    reducers: {
        setLikes: (state, action ) => {
            state.likesCounter = action.payload;
        },
        addLike: ( state, action ) => {
            state.likesCounter = state.likesCounter+1;
            state.liked = true;
            state.likedOnSession = true
        },
        removeLike: ( state, action ) => {
            state.likesCounter = state.likesCounter-1;
            state.liked = false
        },
        isSaving: ( state ) => {
            state.isSaving = true;
        },
        notSaving: ( state ) => {
            state.isSaving = false;
        },
        isLoaded: ( state ) => {
            state.isLoaded = true;
        },
        notLoaded: ( state ) => {
            state.isLoaded = false;
        },
        isLiked: (state) => {
            state.liked = true
        },
        isNotLiked: (state) => {
            state.liked = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { setLikes, addLike, removeLike, isSaving, liked, likedOnSession, notSaving, isLoaded, notLoaded, isLiked, isNotLiked } = likesSlice.actions;