import {ADD_NEWMOVIE,EDIT_NEWMOVIE,SEARCH_WORD,SEARCH_RATE}from'../const/action-types';

export const addNewMovie=(payload)=>({
type: ADD_NEWMOVIE,
payload,
})
export const editMovie=(payload)=>({
    type: EDIT_NEWMOVIE,
    payload,
    })
export const searchWord=(payload)=>({
        type: SEARCH_WORD,
        payload,
        })
export const searchRate=(payload)=>({
            type: SEARCH_RATE,
            payload,
            })