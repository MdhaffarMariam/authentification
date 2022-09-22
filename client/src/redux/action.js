import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCES, LOGIN, LOGIN_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCES } from "./actionTypes"
import axios from 'axios'


export const registerUser = (newUser)=>async(dispatch) =>{
    dispatch({
        type:REGISTER
    })

    try {
        const{data} = await axios.post('/user/register',newUser)
        dispatch({
            type:REGISTER_SUCCES,
            payload:data
        })
    } catch (error) {
        dispatch ({
            type:REGISTER_FAIL,
            payload:error.response.data
        })
        
    }
}

export const loginUser=(user)=>async(dispatch)=>{
    dispatch({
        type:LOGIN
    });
    try {
        const {data}=await axios.post('/user/login',user);
        localStorage.setItem('token',data.token)
        dispatch({
            type:LOGIN_SUCCES,
            payload:data
        })
    } catch (error) {
        dispatch ({
            type:REGISTER_FAIL,
            payload:error.response.data
        })
        
    }
}
export const getprofile =()=>async(dispatch)=>{
    const token = localStorage.getItem("token")
    const config = {
        headers:{
            Authorization : token
        }
    }
    dispatch({
        type : GET_PROFILE
    })
    try {
        const {data}= await axios.get('/user/auth',config)
        dispatch({
            type: GET_PROFILE_SUCCES,
            payload:data
        })
        
    } catch (error) {
        dispatch ({
            type:GET_PROFILE_FAIL,
            payload:error.response.data
        })
    }
}