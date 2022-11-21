import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setUser({
        token: sessionStorage.getItem('token'),
        userID: sessionStorage.getItem('userID'),
        roleID: sessionStorage.getItem('roleID'),
        image: sessionStorage.getItem('image'),
        name: sessionStorage.getItem('name'),
      })
      // console.log('token', sessionStorage.getItem('token'))
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


