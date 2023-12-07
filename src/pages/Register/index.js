import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

import './index.css'


function Register() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError('Passwords must be the same!')
    }

    const res = await createUser(user)

    console.log(res)
  }

  useEffect(()=> {
    if(authError) {
      setError(authError)
    }
  },[authError])


  return (
    <div className='register'>
      <h1>Welcome to PicHub!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna leo, sodales vitae ornare eget, volutpat id risus. Proin rhoncus vehicula libero ac varius.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>
          <span>Name:</span>
          <input 
            type='text' 
            name='displayName' 
            required 
            placeholder='Username' 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <span>E-mail:</span>
          <input 
            type='email' 
            name='email' 
            required 
            placeholder='Insert your e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <span>Password:</span>
          <input 
            type='password' 
            name='password' 
            required 
            placeholder='Insert your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='email'>
          <span>Confirm Password:</span>
          <input 
            type='password' 
            name='confirmPassword' 
            required 
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading &&  
          <button type='submit' className='btn'>
            Register
          </button>
        }
        {loading && 
          <button type='submit' className='btn' disabled>
            Wait for it
          </button>
        }
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register