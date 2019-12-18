import {MODIFY_PROFILE,SEND_PROFILE,SELECT_ARTICLE,CHANGE_ROUTE, CHANGE_SIGNUP_LOGIN, CHANGE_LOGGEDIN,CHANGE_OPTION,CHANGE_USER} from "./constants.js";

const initialState={
   route:"signup",
   onArticle:{
       status:false,
       id:null
   },
   isLog:false,
   profile:{
     modify:false,
     user:{}
   }
}

export const handleRoute=(state=initialState,action={})=>{
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({},state,{route:action.payload,onArticle:{status:false,id:null}});
        case SELECT_ARTICLE:
            return Object.assign({},state,{onArticle:{status:true,id:action.payload}});
         default:
            return state;
    }
}
export const handleProfile=(state=initialState,action={})=>{
    switch (action.type) {
        case MODIFY_PROFILE:
            return Object.assign({},state,{profile:{modify:!state.profile.modify,user:state.profile.user}});
        case SEND_PROFILE:
            return Object.assign({},state,{profile:{modify:state.profile.modify,user:action.payload}});
         default:
            return state;
    }
}
export const handleLogging=(state=initialState,action={})=>{
    switch (action.type) {
        case CHANGE_LOGGEDIN:
            if(state.isLog){
            return Object.assign({}, 
                state, 
                { 
                    isLog: !state.isLog,
                });
            }else{
                return Object.assign({},state,{isLog:!state.isLog})
            }
         default:
            return state;
    }
}
