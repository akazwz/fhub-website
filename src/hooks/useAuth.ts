import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isAuthState, tokenState } from '../state/user_state'

export function useAuth () {
  const [token, setToken] = useRecoilState(tokenState)
  const isAuth = useRecoilValue(isAuthState)

  /*init*/
  useEffect(() => {
    const tokenLocal = localStorage.getItem('token')
    if (tokenLocal) {
      setToken(tokenLocal)
    }
  }, [setToken])

  const setStateLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const setStateLogin = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token)
  }
  return {
    isAuth,
    token,
    setStateLogin,
    setStateLogout,
  }
}

export function useAuthValue<TAuth = unknown, TNotAUth = unknown> (authValue: TAuth, notAuthValue: TNotAUth) {
  const { isAuth } = useAuth()
  return isAuth ? authValue : notAuthValue
}