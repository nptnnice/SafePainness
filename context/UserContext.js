import { createContext, useContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setUser({
        userID: jwt_decode(sessionStorage.getItem('token')).userID,
        role: jwt_decode(sessionStorage.getItem('token')).role,
        image: jwt_decode(sessionStorage.getItem('token')).image,
        name: jwt_decode(sessionStorage.getItem('token')).name,
        // userID: sessionStorage.getItem('userID'),
        // role: sessionStorage.getItem('role'),
        // image: sessionStorage.getItem('image'),
        // name: sessionStorage.getItem('name'),
      })
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
