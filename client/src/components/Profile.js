import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getprofile } from '../redux/action'

const Profile = () => {
    const{users, isAuth}=useSelector(state=>state.reducer)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(getprofile())
    // }, [])
    console.log(users)
  return (
    <div>
       {/* {!isAuth? <Redirect to ='/signin'></Redirect> 
        : */}
       
      <h1>hello {users.fullName}</h1>
      
      

    </div>
  )
}

export default Profile
