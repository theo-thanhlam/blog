
import React, { useState } from 'react'

const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function  register(event){
    event.preventDefault();
    const response = await fetch('http://localhost:3001/register', {
      method:'POST',
      body: JSON.stringify({email, password}),
      headers:{'Content-Type': 'application/json'}
    });

    if(response.status === 200){
      alert("Registration successful");
    }else {
      alert("Registration failed");
    }
  }



  return (
    <form className='register' onSubmit={register}>
      <h1>Register</h1>
      {/* Username */}
        <input 
        type="email" 
        name="" 
        id="" 
        placeholder='Enter your email' 
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      {/* Password */}
        <input 
        type="password" 
        name="" 
        id="" 
        placeholder='Enter your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <button>Register</button>
    </form>
  )
}

export default RegisterPage