import {
  getAuth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  updateProfile,
  // signOut
} from 'firebase/auth'

import {useState, useEffect} from 'react'
import {db} from '../firebase/config'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [ cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  const checkIfIsCancelled = () => {
    if(cancelled) {}
  }
  
  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setError(null)

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      
      await updateProfile(user, {
        displayName: data.displayName
      })

    } catch (err) {
      console.log(err.message)
      console.log(typeof err.message)

      let systemErrorMessage

      if(err.message.includes('Password')){
        systemErrorMessage = 'Password should be at least 6 characters'
      } else if (err.message.includes('email-already')) {
        systemErrorMessage = 'E-mail already used'
      } else if (err.message.includes('invalid-email')) {
        systemErrorMessage = 'Enter a valid e-mail address'
      } else {
        systemErrorMessage = 'An error occurred, please try again later'
      }

      setError(systemErrorMessage)
    }

    setLoading(false)
  }

  useEffect(() => () => setCancelled(true), [])

  return {
    auth,
    createUser,
    error,
    loading
  }
}