'use client'
import { useState } from 'react'
import { registerUser } from '@/services/registerUser'

export default function RegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = async () => {
    await registerUser(name, email, password)
  }
  
  return (
    <div className='flex flex-col gap-1 font-md'>
      <label htmlFor='name'>Name</label>
      <input
        className='border-1 border-black rounded-lg text-black'
        type='name'
        name='name'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleRegistration} className='bg-red-500 rounded-lg mt-5'>Register</button>
    </div>
  )
}
