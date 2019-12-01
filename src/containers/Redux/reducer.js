import { CHANGE_ROUTE, CHANGE_SIGNUP_LOGIN, CHANGE_LOGGEDIN,CHANGE_OPTION,CHANGE_USER} from "./constants.js";

const initialState={
   route:"home",
   isLog:true
}

export const handleRoute=(state=initialState,action={})=>{
    switch (action.type) {
        case CHANGE_ROUTE:
            return Object.assign({},state,{route:action.payload});
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
