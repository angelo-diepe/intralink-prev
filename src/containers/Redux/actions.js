import {SELECT_ARTICLE,CHANGE_ROUTE,CHANGE_SIGNUP_LOGIN,CHANGE_LOGGEDIN,CHANGE_OPTION,CHANGE_USER} from "./constants.js";

export const changeRoute=(route)=>({
    type:CHANGE_ROUTE,
    payload:route
})

export const setLoggedIn = () => ({
    type: CHANGE_LOGGEDIN
})
export const selectArticle = id => ({
	type:SELECT_ARTICLE,
	payload:id
})
export const setOption = (text) => ({
    type: CHANGE_OPTION,
    payload: text
})

export const loadUser = (user) => ({
	type : CHANGE_USER,
	payload : user
})
// export const setLoggedIn = () => (dispatch)=>{
//     dispatch({ type: CHANGE_LOGGEDIN_PENDING })
//     fetch("https://localhost:3001/signin")
//     .then(response=>response.json())
//     .then(data=>dispatch({type:CHANGE_LOGGEDIN_SUCCESS,payload:data}))
//     .catch(err=>dispatch({type:CHANGE_LOGGEDIN_FAILED,payload:err}))
// }