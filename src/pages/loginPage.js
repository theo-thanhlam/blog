import React from 'react'
import '../styles/Form.css'
const LoginPage = () => {
  return (
    <form className='login'>
      <h1> Login</h1>
      <input type="text" name="" id="" placeholder='Enter your username'/>
      <input type="text" name="" id="" placeholder='Enter your password'/>
      <button>Login</button>
    </form>
  )
}

export default LoginPage