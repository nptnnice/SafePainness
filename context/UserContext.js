import { createContext, useContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      let userData = await axios.get('/api/getUser', {
        headers: {
          userid: jwt_decode(sessionStorage.getItem('token')).userID,
        },
      })
      setUser({
        userID: userData.data.userID,
        role: userData.data.role,
        image: userData.data.image,
        name: userData.data.firstName + ' ' + userData.data.lastName,
      })
    }

    if (sessionStorage.getItem('token')) {
      getUser()
    }
  }, [])
  console.log('user', user)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
