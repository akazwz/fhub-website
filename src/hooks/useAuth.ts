import { useEffect, useState } from 'react'

export function useAuth () {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)

  /*init*/
  useEffect(() => {
    const tokenLocal = localStorage.getItem('token')
    if (tokenLocal) {
      setToken(tokenLocal)
    }
    setIsAuth(!!tokenLocal)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAuth(false)
  }

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token)
    setIsAuth(true)
  }
  return {
    isAuth,
    token,
    login,
    logout,
  }
}

export function useAuthValue<TAuth = unknown, TNotAUth = unknown> (authValue: TAuth, notAuthValue: TNotAUth) {
  const { isAuth } = useAuth()
  return isAuth ? authValue : notAuthValue
}