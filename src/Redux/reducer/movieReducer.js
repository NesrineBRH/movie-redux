import { ADD_NEWMOVIE, SEARCH_RATE } from "../const/action-types";

const initialState = {
   movieList:movieList,
   searchWord:'',
   ratingSearch:0,
   };
   
const movieReducer=(state=initialState,{type, payload})=>{

switch(type){

case ADD_NEWMOVIE:return{movieList:[...state.movieList,payload],};
case SEARCH_WORD:return{
    ...state,
    searchWord:payload,  
};
case SEARCH_RATE:return{
    ...state,
    ratingSearch:payload,  
};
  }}

  export default movieReducer;