
import axios from 'axios'
import React, {useRef} from 'react'
import { useState } from 'react'
const Form = (props) => {
    const loginNameRef = useRef()
    const loginPassRef = useRef()
    const regNameRef = useRef()
    const regPassRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        let body = {
            username: loginNameRef.current.value,
            password: loginPassRef.current.value
        }
        console.log(body)
        axios
            .post('http://localhost:4000/login', body)
            .then((res) => {
                props.setAuth(true)
            })
            .catch((err) => {
                alert("Unauthorized")
            })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        let body = {
            username: regNameRef.current.value,
            password: regPassRef.current.value
        }
        axios
            .post('http://localhost:4000/register', body)
            .then((res) => {
                props.setAuth(true)
            })
            .catch((err) => {
                alert("cannot register")
                console.log(err)
            })
    }




  return (
    <div>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input ref={loginNameRef} type="text" placeholder='Username'/>
            <input ref={loginPassRef} type="Password" placeholder='Password'/>
            <button>Login</button>
        </form>
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input ref={regNameRef} type="text" placeholder='Username'/>
            <input ref={regPassRef} type="Password" placeholder='Password'/>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Form