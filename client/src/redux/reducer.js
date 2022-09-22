import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCES, LOGIN, LOGIN_FAIL, LOGIN_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCES } from "./actionTypes";

const init = {
    loading : false,
    errors : null,
    users:null,
    token:null,
    isAuth :false
}


const reducer = (state=init , {type,payload})=>{
    switch (type) {
        case REGISTER:
        case LOGIN:
        case GET_PROFILE:
            return{
                ...state,loading:true
            }
            
        case REGISTER_SUCCES:
            return{
                ...state,loading:false,users:payload
            }
            case LOGIN_SUCCES:
                return{
                    ...state,loading:false,users:payload, token:payload.token
               
                }
        case GET_PROFILE_SUCCES:
            return{
                ...state , loading:false ,users:payload , isAuth:true
            }
            case REGISTER_FAIL:
            case LOGIN_FAIL:
            case GET_PROFILE_FAIL:
                return{
                    ...state, loading:false , errors:payload
                }
    
        default:
            return state;
    }
}
export default reducer