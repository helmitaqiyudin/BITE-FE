'use client'
import { useState } from 'react'
import { loginUser } from '@/services/userService'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const userData = await loginUser(email, password);
    } catch (error) {
        console.log(error);
    }
  }
  
  return (
    <div className='flex flex-col gap-1 font-md'>
      <label htmlFor='email'>Email</label>
      <input
        className='border-1 border-black rounded-lg text-black'
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        className='border-1 border-black rounded-lg'
        type='password'
        name='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className='bg-red-500 rounded-lg mt-5'>Login</button>
    </div>
  )
}
