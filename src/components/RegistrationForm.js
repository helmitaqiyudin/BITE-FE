'use client'
import { useState } from 'react'
import { registeruser } from '@/services/registerUser'

export default function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = async () => {
    await registeruser(name, email, password)
  }
  
  return (
    <div className='flex flex-col'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  )
}
