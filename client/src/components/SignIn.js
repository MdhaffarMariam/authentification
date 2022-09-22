import React , {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch, useSelector, } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../redux/action'
const SignIn = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{loading}=useSelector(state=>state.reducer)
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
      e.preventDefault();
      const newUser={
        email,
        password
      }
      dispatch(loginUser(newUser))}
  return (
    <div>
      <Form>
        {loading? <h1>loading...</h1>:
        localStorage.getItem('token') ? <Redirect to = '/Profile'></Redirect> 
        :
        <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange= {(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </>
      }
      </Form>
    </div>
  )
}

export default SignIn
